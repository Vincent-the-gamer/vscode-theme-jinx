export default {
    admin: "Run VS Code with admin privileges so the changes can be applied.",
	enabled:
		"Jinx glow enabled. Restart to take effect. " +
		"If Code complains about it is corrupted, CLICK DON'T SHOW AGAIN. " +
		"See README for more detail.",
	disabled: "Jinx glow disabled and reverted to default. Restart to take effect.",
	already_disabled: "Jinx glow already disabled.",
	somethingWrong: "Something went wrong: ",
	restartIde: "Restart Visual Studio Code",
	notfound: "Jinx glow not found.",
	notConfigured:
		"Jinx glow path not configured. " +
		'Please set "jinx.imports" in your user settings.',
	reloadAfterVersionUpgrade:
		"Detected reloading CSS / JS after VSCode is upgraded. " + "Performing application only.",
	cannotLoad: (url: string) => `Cannot load '${url}'. Skipping.`
}
