import toml from 'toml';

export default class TomlModule {
  execute(docs, ctx) {
    for (let doc of docs) {
      doc.addMeta(toml.parse(doc.content));
      doc.content = '';
    }
    return docs;
  }
}