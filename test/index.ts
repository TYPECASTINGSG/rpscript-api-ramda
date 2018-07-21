import * as c from 'chai';
import * as m from 'mocha';
import RpsRamda from '../src/index';
import {RpsContext} from 'rpscript-interface';

m.describe('Ramda', () => {
  m.it('should adjust', async function() {
    let ramda = new RpsRamda();
    let ctx = new RpsContext();
    
    let result1 = await ramda.adjust(ctx,{},await ramda.add(ctx,{},10), 1, [1,2,3] );
    let result2 = (await (await ramda.adjust(ctx,{}, await ramda.add(ctx,{},10)) ) (1)) ([1,2,3]);

    c.expect(result1).to.be.deep.equals(result2);

  });

})
