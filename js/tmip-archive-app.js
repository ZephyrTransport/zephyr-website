'use strict';

// TMIP Archive Vue Application
// Questions / PRs, contact Billy Charlton <mail@billyc.cc>
// ----------------------------------------------------------------

// ZSTD archive decompressor (database is compressed)
import { ZSTDDecoder } from 'https://unpkg.com/zstddec@0.1.0/dist/zstddec.esm.js';

const DB_PATH = '/tmip-archive/tmip.db.zst';

export default {
  data() {
    return {
      count: 0,
      db: {},
    };
  },

  mounted() {
    // this happens async
    this.db = this.fetchSqliteDatabase();
  },

  methods: {
    async fetchSqliteDatabase() {
      // initialize ZSTD decompressor
      const decoder = new ZSTDDecoder();
      await decoder.init();

      // fetch & uncompress archive
      const archive = await (await fetch(DB_PATH)).arrayBuffer();
      const buffer = decoder.decode(new Uint8Array(archive));
      console.log('BUFFER bytes', buffer.byteLength);

      this.count++;
      console.log({ archive, buffer });

      return buffer;
    },
  },

  template: `
    <div>count is {{ count }}</div>
  `,
};
