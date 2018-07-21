import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';
import async from "async";
import R from 'ramda';

/** Module for Ramda
 * @namespace Ramda
 * 
 * @see {@link https://ramdajs.com/docs/}
*/
@RpsModule("ramda")
export default class RpsRamda {

  // ********  List  ********

  /**
 * @function adjust
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#adjust}
*/
  @rpsAction({verbName:'adjust'})
  async adjust (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
    return R.adjust.apply(this,params);
  }


  // ********  Object  ********

  // ********  Function  ********

  // ********  Logic  ********

  // ********  Relation  ********

  // ********  Type  ********

  // ********  Math  ********

 /**
 * @function add
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#add}
*/
@rpsAction({verbName:'add'})
async add (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.add.apply(this,params);
}

  // ********  String  ********

}

