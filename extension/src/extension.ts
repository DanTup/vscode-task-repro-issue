import * as vs from "vscode";

export function activate(context: vs.ExtensionContext, isRestart: boolean = false) {
	context.subscriptions.push(vs.tasks.registerTaskProvider("pub", new PubBuildRunnerTaskProvider()));
}

export async function deactivate(): Promise<void> { }

export class PubBuildRunnerTaskProvider implements vs.TaskProvider {
	constructor() {
		vs.window.showInformationMessage("constructor");
	}

	public provideTasks(token?: vs.CancellationToken): vs.ProviderResult<vs.Task[]> {
		// This code is never called...
		vs.window.showInformationMessage("provideTasks was called");
		// Doesn't matter what goes here...
		return [
			new vs.Task(
				{
					type: "pub",
					command: "version",
				}, vs.TaskScope.Global,
				"pub version",
				"pub",
				new vs.ShellExecution("pub --version"),
			),
		];
	}

	public resolveTask(task: vs.Task, token?: vs.CancellationToken): undefined {
		return undefined;
	}
}
