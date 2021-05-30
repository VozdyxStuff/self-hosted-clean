var exec = require('child_process').exec, child;

child = exec('cd ../../ && rm -Rf $REPO_NAME _PipelineMapping _temp _tool',
    function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });
 child();
