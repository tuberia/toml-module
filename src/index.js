import TomlModule from './toml-module';
import TomlifyModule from './tomlify-module';

let toml = function toml() {
  return new TomlModule();
}

toml.generate = function (delim) {
  return new TomlifyModule(delim);
}

export { toml as default };