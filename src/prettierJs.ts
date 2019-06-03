import * as path from 'path';
import * as fs from 'fs';
import { format, Options } from 'prettier';
import sylvanas from './index';

function prettierJS(jsFiles: sylvanas.FileEntity[]) {
  const str = fs.readFileSync(path.resolve(__dirname, '../.prettierrc'), 'utf8');
  const prettierOption: Options = JSON.parse(str);
  prettierOption.parser = 'babel';

  return jsFiles.map(entity => {
    const data = format(entity.data, prettierOption);
    return {
      ...entity,
      data,
    };
  });
}

export default prettierJS;