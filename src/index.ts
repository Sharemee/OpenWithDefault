import * as cp from "child_process";

export const openSolutionFile = (path: string): void => {
    let parameter = `"${path}"`;
    console.log("parameter: ", parameter);
    cp.exec(`start "" ${parameter}`, (err, stdout, stderr) => {
        if (err) {
            console.log('error: ' + err);
        }
    });
};