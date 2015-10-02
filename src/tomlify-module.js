import tomlify from 'tomlify';

export default class TomlifyModule {
  constructor(delim) {
    this.delim = delim || '+++';
  }
  execute(docs, ctx) {
    for (let doc of docs) {
      doc.content = tomlify(doc.meta, {delims: this.delim});
      doc.meta = {};
    }
    return docs;
  }
}