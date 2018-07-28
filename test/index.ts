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

  m.it('should map and filter', async function() {
    let ramda = new RpsRamda();
    let ctx = new RpsContext();
    
    // await api("filter" , $CONTEXT , {} , await api("ends-with" , $CONTEXT , {} , 'c') , $CONTEXT.$RESULT);
    let result1 = await ramda.filter(ctx,{},await ramda.endsWith(ctx,{},'b'), ['aba','abb','abc'] );
    let result2 = await ramda.map(ctx,{},await ramda.endsWith(ctx,{},'b'), ['aba','abb','abc'] );
    let result3 = await ramda.map(ctx,{},await ramda.toUpper(ctx,{}), ['aba','abb','abc'] );

    c.expect(result1).to.be.deep.equals(['abb']);
    c.expect(result2).to.be.deep.equals([false,true,false]);
    c.expect(result3).to.be.deep.equals(['ABA','ABB','ABC']);

    let result4 = await ramda.r(ctx,{},'T');
    c.expect(result4()).to.be.true;

  });

})
