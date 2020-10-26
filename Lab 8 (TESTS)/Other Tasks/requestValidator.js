function requestValidator(object) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const errorTemplate = 'Invalid request header: Invalid ';
    
    if (!object.method || !validMethods.includes(object.method)) {
        throw new Error(`${errorTemplate}Method`);
    }

    const uriRegex = RegExp('[\w.]+');
    if (!object.uri || object.uri.trim().isEmpty || !(uriRegex.test(object.uri) || object.uri === '*')) {
        throw new Error(`${errorTemplate}URI`);
    }

    if (!object.version || !typeof(object.version) === 'string' || !validVersions.includes(object.version)) {
        throw new Error(`${errorTemplate}Version`);
    }

    const messageRegex = RegExp('[a-zA-Z0-9`~!@#$%^*()-=_+[\]{};:|,.\/?]+');

    if (object.message === '') {
        return object;
    }
    if (!object.message || messageRegex.test(object.message)) {
        throw new Error(`${errorTemplate}Message`);
    }

    return object;

}

requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: 'asl<pls'
}  );