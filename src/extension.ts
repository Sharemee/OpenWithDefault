// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { openSolutionFile } from "./index";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	//console.log('Congratulations, your extension "openwithdefault" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let openWithVisualStudio = vscode.commands.registerCommand("openwithdefault.openfilewithvisualstudio", (uri: vscode.Uri) => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		if (uri.scheme === "file" && uri.fsPath) {
			vscode.window.showInformationMessage('Open file with Visual Studio: ' + uri.fsPath);
			openSolutionFile(uri.fsPath);
		}
	});
	context.subscriptions.push(openWithVisualStudio);

	let openWithDefault = vscode.commands.registerCommand("openwithdefault.openfilewithdefault", (uri: vscode.Uri) => {
		console.log(uri);
		if (uri.scheme === "file" && uri.fsPath) {
			vscode.window.showInformationMessage('Open file with default: ' + uri.fsPath);
			openSolutionFile(uri.fsPath);
		}
	});
	context.subscriptions.push(openWithDefault);
}

// This method is called when your extension is deactivated
export function deactivate() {

}
