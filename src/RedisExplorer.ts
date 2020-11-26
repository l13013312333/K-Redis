import * as vscode from 'vscode';

export class RedisExplorer {

	constructor(context: vscode.ExtensionContext) {
		console.log('in constur')
		
		vscode.commands.registerCommand('config.commands.redisServer', () => {
			vscode.window.showInformationMessage('Hello World!');
		});
	}
	private reconnectRedis() {

  }

	private openResource(resource: any) {}
	
}