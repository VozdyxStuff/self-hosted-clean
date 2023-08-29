const { exec } = require('child_process');

function main() {
    exec('cd ../../ && rm -Rf $REPO_NAME _PipelineMapping _temp _tool _actions',
        function (error, stdout, stderr) {
            if (stdout) {
                console.log('stdout: ' + stdout);
                return;
            }
    
            if (stderr) {
                console.log('stderr: ' + stderr);
                return;
            }
            
            if (error) {
                console.log('exec error: ' + error);
                return;
            }

            console.log('Cleanup done successfully!')
    });
}

main();
