import * as cp from "child_process";

export const openSolutionFile = (path: string): void => {
    cp.exec('start ' + path, (err, stdout, stderr) => {
        if (err) {
            console.log('error: ' + err);
        }
    });
};