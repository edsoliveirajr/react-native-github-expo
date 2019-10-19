/*
import DeviceInfo from 'react-native-device-info';
import Reactotron from 'reactotron-react-native';

const isLogEnable = false;
/**
 * Configure Reactotron and redirect console.log to Reactotron.log
 

function configureReactotron() {
  // simulator; host is auto select
  if (DeviceInfo.isEmulator()) {
    Reactotron.configure({
      name: 'App',
    }).connect();
  }
  // device; host is copmputer ip address
  else {
    Reactotron.configure({
      name: 'App',
      host: '127.0.0.1',
    }).connect();
  }
  // clear log on start
  Reactotron.clear();
}

function log(message, ...args) {
  if (!isLogEnable) return;
  Reactotron.display({
    name: 'LOG',
    preview: message,
    value: {message, args},
  });
}

function info(message, ...args) {
  if (!isLogEnable) return;
  Reactotron.display({
    name: 'INFO',
    preview: message,
    value: {message, args},
  });
}

function warn(message, ...args) {
  if (!isLogEnable) return;
  Reactotron.warn({
    name: 'WARN',
    preview: message,
    value: {message, args},
    important: true,
  });
}

function error(message, ...args) {
  if (!isLogEnable) return;
  Reactotron.error({
    name: 'ERROR',
    preview: message,
    value: {message, args},
    important: true,
  });
}

function connectConsoleToReactotron() {
  console.info = info;
  console.log = log;
  console.warn = warn;
  console.error = error;
}

function configure(options) {
  isLogEnable = options.enableLog ? options.enableLog : false;
  configureReactotron();
  connectConsoleToReactotron();
}

if (__DEV__) {
  configure({enableLog: true});
}
*/
