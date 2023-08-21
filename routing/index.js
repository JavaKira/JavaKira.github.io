import url from 'url';
import fs from 'fs';

const define = function(req, res, postData) {
    const urlParsed = url.parse(req.url, true);
    let path = urlParsed.pathname;

    let prePath = __dirname;
    try {
        let dynPath = './dynamic/' + path;
        let routeDestination = require(dynPath);
        routeDestination.promise(res,postData,req).then(
            result => {
                res.writeHead(200);
                res.end(result);
            },
            error => {
                let endMessage = {};
                endMessage.error = 1;
                endMessage.errorName = error;
                res.end(JSON.stringify(endMessage));
            }
        );

    }
    catch (err) {
        let filePath = prePath+'/static'+path+'/index.html';
        fs.readFile(filePath, 'utf-8', (err, html) => {
            if(err) {
                let nopath = '/var/www/html/nodejs/routing/nopage/index.html';
                fs.readFile(nopath, (err , html) => {
                    if(!err) {
                        res.writeHead(404, {'Content-Type': 'text/html'});
                        res.end(html);
                    }

                    else{
                        let text = "Something went wrong. Please contact webmaster@forgetable.ru";
                        res.writeHead(404, {'Content-Type': 'text/plain'});
                        res.end(text);
                    }
                });
            }
            else{
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(html);
            }
        });
    }
};

export default define