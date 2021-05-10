import execa from "execa";
import logdown from "logdown";

const logger = logdown("bbk-cli");
logger.state.isEnabled = true;

const CLI_NAME = "bbk_cli";

export async function speedTest({
    useMock,
}: {
    useMock?: boolean;
}): Promise<SpeedResult> {
    let rawTestResult: string = null;

    try {
        logger.info("starting speed test");
        if (!useMock) {
            const execReturn = await execa(CLI_NAME, ["--quiet"]);
            rawTestResult = execReturn.stdout;
        } else {
            rawTestResult = "4.67042 244.814 257.103 sth20a0183e7";
        }
        logger.info("Test result:", rawTestResult);
    } catch (error) {
        if (error.code === "ENOENT") {
            logger.error(`Command '${CLI_NAME}' was not found in PATH`);
        } else {
            logger.error(error);
        }
    }

    const [latency, download, upload, measurementId] = rawTestResult.split(
        " ",
        4
    );
    // measurement id format seems to be "<server>0<id>"
    const server = measurementId.substring(0, measurementId.indexOf("0"));

    logger.info(
        "parsed result",
        "latency:",
        Number(latency),
        "download:",
        Number(download),
        "upload:",
        Number(upload),
        "server:",
        server
    );

    return {
        latency: Number(latency),
        download: Number(download),
        upload: Number(upload),
        server,
    };
}

export type SpeedResult = {
    latency: number;
    download: number;
    upload: number;
    server: string;
};
