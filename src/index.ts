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

  /**
 * @function all
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#all}
*/
@rpsAction({verbName:'all'})
async all (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.all.apply(this,params);
}

/**
 * @function any
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#any}
*/
@rpsAction({verbName:'any'})
async any (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.any.apply(this,params);
}

/**
 * @function aperture
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#aperture}
*/
@rpsAction({verbName:'aperture'})
async aperture (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.aperture.apply(this,params);
}

/**
 * @function append
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#append}
*/
@rpsAction({verbName:'append'})
async append (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.append.apply(this,params);
}

/**
 * @function chain
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#chain}
*/
@rpsAction({verbName:'chain'})
async chain (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.chain.apply(this,params);
}

/**
 * @function concat
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#concat}
*/
@rpsAction({verbName:'concat'})
async concat (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.concat.apply(this,params);
}

/**
 * @function contains
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#contains}
*/
@rpsAction({verbName:'contains'})
async contains (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.contains.apply(this,params);
}

/**
 * @function drop
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#drop}
*/
@rpsAction({verbName:'drop'})
async drop (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.drop.apply(this,params);
}

/**
 * @function dropLast
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#dropLast}
*/
@rpsAction({verbName:'drop-last'})
async dropLast (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.dropLast.apply(this,params);
}

/**
 * @function drop-last-while
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#dropLastWhile}
*/
@rpsAction({verbName:'drop-last-while'})
async dropLastWhile (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.dropLastWhile.apply(this,params);
}

/**
 * @function dropRepeats
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#dropRepeats}
*/
@rpsAction({verbName:'drop-repeats'})
async dropRepeats (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  //@ts-ignore
  return R.dropRepeats.apply(this,params);
}

/**
 * @function dropRepeatsWith
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#dropRepeatsWith}
*/
@rpsAction({verbName:'drop-repeats-with'})
async dropRepeatsWith (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  //@ts-ignore
  return R.dropRepeatsWith.apply(this,params);
}

/**
 * @function dropWhile
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#dropWhile}
*/
@rpsAction({verbName:'drop-while'})
async dropWhile (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.dropWhile.apply(this,params);
}

/**
 * @function endsWith
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#endsWith}
*/
@rpsAction({verbName:'ends-with'})
async endsWith (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.endsWith.apply(this,params);
}

/**
 * @function filter
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#filter}
*/
@rpsAction({verbName:'filter'})
filter (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any[]> {
  return R.filter.apply(this,params);
}

/**
 * @function filter-series
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#filter}
*/
@rpsAction({verbName:'filter-series'})
filterSeries (ctx:RpsContext,opts:{}, fn:any, functor:any[]) : Promise<any[]> {
  var func = async (val, cb) => cb(null,await fn(val));

  return new Promise((resolve,reject)=> {
    async.filterSeries(functor,func, (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
}

/**
 * @function find
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#find}
*/
@rpsAction({verbName:'find'})
async find (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.find.apply(this,params);
}

/**
 * @function findIndex
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#findIndex}
*/
@rpsAction({verbName:'find-index'})
async findIndex (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.findIndex.apply(this,params);
}

/**
 * @function findLast
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#findLast}
*/
@rpsAction({verbName:'find-last'})
async findLast (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.findLast.apply(this,params);
}

/**
 * @function findLastIndex
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#findLastIndex}
*/
@rpsAction({verbName:'find-last-index'})
async findLastIndex (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.findLastIndex.apply(this,params);
}

/**
 * @function flatten
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#flatten}
*/
@rpsAction({verbName:'flatten'})
async flatten (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.flatten.apply(this,params);
}

/**
 * @function forEach
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#forEach}
*/
@rpsAction({verbName:'for-each'})
async forEach (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.forEach.apply(this,params);
}

/**
 * @function fromPairs
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#fromPairs}
*/
@rpsAction({verbName:'from-pairs'})
async fromPairs (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.fromPairs.apply(this,params);
}

/**
 * @function groupBy
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#groupBy}
*/
@rpsAction({verbName:'group-by'})
async groupBy (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.groupBy.apply(this,params);
}

/**
 * @function groupWith
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#groupWith}
*/
@rpsAction({verbName:'group-with'})
async groupWith (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.groupWith.apply(this,params);
}

/**
 * @function head
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#head}
*/
@rpsAction({verbName:'head'})
async head (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.head.apply(this,params);
}

/**
 * @function indexOf
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#indexOf}
*/
@rpsAction({verbName:'index-of'})
async indexOf (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.indexOf.apply(this,params);
}

/**
 * @function indexBy
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#indexBy}
*/
@rpsAction({verbName:'index-by'})
async indexBy (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.indexBy.apply(this,params);
}

/**
 * @function init
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#init}
*/
@rpsAction({verbName:'init'})
async init (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.init.apply(this,params);
}

/**
 * @function insert
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#insert}
*/
@rpsAction({verbName:'insert'})
async insert (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.insert.apply(this,params);
}

/**
 * @function insertAll
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#insertAll}
*/
@rpsAction({verbName:'insert-all'})
async insertAll (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.insertAll.apply(this,params);
}

/**
 * @function intersperse
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#intersperse}
*/
@rpsAction({verbName:'intersperse'})
async intersperse (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.intersperse.apply(this,params);
}

/**
 * @function into
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#into}
*/
@rpsAction({verbName:'into'})
async into (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.into.apply(this,params);
}

/**
 * @function join
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#join}
*/
@rpsAction({verbName:'join'})
async join (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.join.apply(this,params);
}

/**
 * @function last
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#last}
*/
@rpsAction({verbName:'last'})
async last (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.last.apply(this,params);
}

/**
 * @function lastIndexOf
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#lastIndexOf}
*/
@rpsAction({verbName:'last-index-of'})
async lastIndexOf (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.lastIndexOf.apply(this,params);
}

/**
 * @function length
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#length}
*/
@rpsAction({verbName:'length'})
async length (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.length.apply(this,params);
}

/**
 * @function map
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#map}
*/
@rpsAction({verbName:'map'})
map (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any[]> {
  return R.map.apply(this,params);
}

/**
 * @function map-series
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#map}
*/
@rpsAction({verbName:'map-series'})
mapSeries (ctx:RpsContext,opts:{}, fn:Function,functor:any[]) : Promise<any[]> {
  var func = async (val, cb) => cb(null,await fn(val));

  return new Promise((resolve,reject)=> {
    async.mapSeries(functor,func, (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
}

/**
 * @function mapAccum
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#mapAccum}
*/
@rpsAction({verbName:'map-accum'})
async mapAccum (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.mapAccum.apply(this,params);
}

/**
 * @function mapAccumRight
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#mapAccumRight}
*/
@rpsAction({verbName:'map-accum-right'})
async mapAccumRight (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.mapAccumRight.apply(this,params);
}

/**
 * @function mergeAll
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#mergeAll}
*/
@rpsAction({verbName:'merge-all'})
async mergeAll (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.mergeAll.apply(this,params);
}

/**
 * @function none
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#none}
*/
@rpsAction({verbName:'none'})
async none (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.none.apply(this,params);
}

/**
 * @function nth
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#nth}
*/
@rpsAction({verbName:'nth'})
async nth (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.nth.apply(this,params);
}

/**
 * @function pair
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#pair}
*/
@rpsAction({verbName:'pair'})
async pair (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.pair.apply(this,params);
}

/**
 * @function partition
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#partition}
*/
@rpsAction({verbName:'partition'})
async partition (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.partition.apply(this,params);
}

/**
 * @function pluck
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#pluck}
*/
@rpsAction({verbName:'pluck'})
async pluck (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.pluck.apply(this,params);
}

/**
 * @function prepend
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#prepend}
*/
@rpsAction({verbName:'prepend'})
async prepend (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.prepend.apply(this,params);
}

/**
 * @function range
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#range}
*/
@rpsAction({verbName:'range'})
async range (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.range.apply(this,params);
}

/**
 * @function reduce
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#reduce}
*/
@rpsAction({verbName:'reduce'})
async reduce (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.reduce.apply(this,params);
}

/**
 * @function reduceBy
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#reduceBy}
*/
@rpsAction({verbName:'reduce-by'})
async reduceBy (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.reduceBy.apply(this,params);
}

/**
 * @function reduced
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#reduced}
*/
@rpsAction({verbName:'reduced'})
async reduced (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.reduced.apply(this,params);
}

/**
 * @function reduceRight
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#reduceRight}
*/
@rpsAction({verbName:'reduce-right'})
async reduceRight (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.reduceRight.apply(this,params);
}

/**
 * @function reduceWhile
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#reduceWhile}
*/
@rpsAction({verbName:'reduce-while'})
async reduceWhile (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.reduceWhile.apply(this,params);
}

/**
 * @function reject
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#reject}
*/
@rpsAction({verbName:'reject'})
async reject (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.reject.apply(this,params);
}

/**
 * @function remove
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#remove}
*/
@rpsAction({verbName:'remove'})
async remove (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.remove.apply(this,params);
}

/**
 * @function repeat
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#repeat}
*/
@rpsAction({verbName:'repeat'})
async repeat (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.repeat.apply(this,params);
}

/**
 * @function reverse
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#reverse}
*/
@rpsAction({verbName:'reverse'})
async reverse (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.reverse.apply(this,params);
}

/**
 * @function scan
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#scan}
*/
@rpsAction({verbName:'scan'})
async scan (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.scan.apply(this,params);
}

/**
 * @function sequence
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#sequence}
*/
@rpsAction({verbName:'sequence'})
async sequence (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  //@ts-ignore
  return R.sequence.apply(this,params);
}

/**
 * @function slice
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#slice}
*/
@rpsAction({verbName:'slice'})
async slice (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.slice.apply(this,params);
}

/**
 * @function sort
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#sort}
*/
@rpsAction({verbName:'sort'})
async sort (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.sort.apply(this,params);
}

/**
 * @function splitAt
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#splitAt}
*/
@rpsAction({verbName:'split-at'})
async splitAt (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.splitAt.apply(this,params);
}

/**
 * @function splitEvery
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#splitEvery}
*/
@rpsAction({verbName:'split-every'})
async splitEvery (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.splitEvery.apply(this,params);
}

/**
 * @function splitWhen
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#splitWhen}
*/
@rpsAction({verbName:'split-when'})
async splitWhen (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.splitWhen.apply(this,params);
}

/**
 * @function startsWith
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#startsWith}
*/
@rpsAction({verbName:'starts-with'})
async startsWith (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.startsWith.apply(this,params);
}

/**
 * @function tail
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#tail}
*/
@rpsAction({verbName:'tail'})
async tail (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.tail.apply(this,params);
}

/**
 * @function take
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#take}
*/
@rpsAction({verbName:'take'})
async take (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.take.apply(this,params);
}

/**
 * @function takeLast
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#takeLast}
*/
@rpsAction({verbName:'take-last'})
async takeLast (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.takeLast.apply(this,params);
}

/**
 * @function takeLastWhile
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#takeLastWhile}
*/
@rpsAction({verbName:'take-last-while'})
async takeLastWhile (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.takeLastWhile.apply(this,params);
}

/**
 * @function takeWhile
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#takeWhile}
*/
@rpsAction({verbName:'take-while'})
async takeWhile (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.takeWhile.apply(this,params);
}

/**
 * @function times
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#times}
*/
@rpsAction({verbName:'times'})
async times (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.times.apply(this,params);
}

/**
 * @function transduce
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#transduce}
*/
@rpsAction({verbName:'transduce'})
async transduce (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.transduce.apply(this,params);
}

/**
 * @function transpose
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#transpose}
*/
@rpsAction({verbName:'transpose'})
async transpose (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.transpose.apply(this,params);
}

/**
 * @function traverse
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#traverse}
*/
@rpsAction({verbName:'traverse'})
async traverse (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.traverse.apply(this,params);
}

/**
 * @function unfold
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#unfold}
*/
@rpsAction({verbName:'unfold'})
async unfold (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.unfold.apply(this,params);
}

/**
 * @function uniq
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#uniq}
*/
@rpsAction({verbName:'uniq'})
async uniq (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.uniq.apply(this,params);
}

/**
 * @function uniqBy
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#uniqBy}
*/
@rpsAction({verbName:'uniq-by'})
async uniqBy (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.uniqBy.apply(this,params);
}

/**
 * @function uniqWith
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#uniqWith}
*/
@rpsAction({verbName:'uniq-with'})
async uniqWith (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.uniqWith.apply(this,params);
}

/**
 * @function unnest
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#unnest}
*/
@rpsAction({verbName:'unnest'})
async unnest (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.unnest.apply(this,params);
}

/**
 * @function update
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#update}
*/
@rpsAction({verbName:'update'})
async update (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.update.apply(this,params);
}

/**
 * @function without
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#without}
*/
@rpsAction({verbName:'without'})
async without (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.without.apply(this,params);
}

/**
 * @function xprod
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#xprod}
*/
@rpsAction({verbName:'xprod'})
async xprod (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.xprod.apply(this,params);
}

/**
 * @function zip
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#zip}
*/
@rpsAction({verbName:'zip'})
async zip (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.zip.apply(this,params);
}

/**
 * @function zipObj
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#zipObj}
*/
@rpsAction({verbName:'zip-obj'})
async zipObj (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.zipObj.apply(this,params);
}


/**
 * @function zipWith
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#zipWith}
*/
@rpsAction({verbName:'zip-with'})
async zipWith (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.zipWith.apply(this,params);
}


  // ********  Object  ********

/**
 * @function keys
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#keys}
*/
@rpsAction({verbName:'keys'})
async keys (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.keys.apply(this,params);
}

/**
 * @function assoc
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#assoc}
*/
@rpsAction({verbName:'assoc'})
async assoc (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.assoc.apply(this,params);
}

/**
 * @function assocPath
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#assocPath}
*/
@rpsAction({verbName:'assoc-path'})
async assocPath (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.assocPath.apply(this,params);
}

/**
 * @function clone
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#clone}
*/
@rpsAction({verbName:'clone'})
async clone (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.clone.apply(this,params);
}

/**
 * @function dissoc
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#dissoc}
*/
@rpsAction({verbName:'dissoc'})
async dissoc (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.dissoc.apply(this,params);
}

/**
 * @function dissocPath
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#dissocPath}
*/
@rpsAction({verbName:'dissoc-path'})
async dissocPath (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.dissocPath.apply(this,params);
}

/**
 * @function eqProps
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#eqProps}
*/
@rpsAction({verbName:'eq-props'})
async eqProps (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.eqProps.apply(this,params);
}

/**
 * @function evolve
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#evolve}
*/
@rpsAction({verbName:'evolve'})
async evolve (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.evolve.apply(this,params);
}

/**
 * @function forEachObjIndexed
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#forEachObjIndexed}
*/
@rpsAction({verbName:'for-each-obj-indexed'})
async forEachObjIndexed (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.forEachObjIndexed.apply(this,params);
}

/**
 * @function has
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#has}
*/
@rpsAction({verbName:'has'})
async has (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.has.apply(this,params);
}

/**
 * @function hasIn
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#hasIn}
*/
@rpsAction({verbName:'has-in'})
async hasIn (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.hasIn.apply(this,params);
}

/**
 * @function invert
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#invert}
*/
@rpsAction({verbName:'invert'})
async invert (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.invert.apply(this,params);
}

/**
 * @function invertObj
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#invertObj}
*/
@rpsAction({verbName:'invert-obj'})
async invertObj (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.invertObj.apply(this,params);
}

/**
 * @function keysIn
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#keysIn}
*/
@rpsAction({verbName:'keys-in'})
async keysIn (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.keysIn.apply(this,params);
}

/**
 * @function lens
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#lens}
*/
@rpsAction({verbName:'lens'})
async lens (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.lens.apply(this,params);
}

/**
 * @function lensIndex
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#lensIndex}
*/
@rpsAction({verbName:'lens-index'})
async lensIndex (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.lensIndex.apply(this,params);
}

/**
 * @function lensPath
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#lensPath}
*/
@rpsAction({verbName:'lens-path'})
async lensPath (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.lensPath.apply(this,params);
}

/**
 * @function lensProp
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#lensProp}
*/
@rpsAction({verbName:'lens-prop'})
async lensProp (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.lensProp.apply(this,params);
}

/**
 * @function mapObjIndexed
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#mapObjIndexed}
*/
@rpsAction({verbName:'map-obj-indexed'})
async mapObjIndexed (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.mapObjIndexed.apply(this,params);
}

/**
 * @function merge
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#merge}
*/
@rpsAction({verbName:'merge'})
async merge (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.merge.apply(this,params);
}

/**
 * @function mergeDeepLeft
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#mergeDeepLeft}
*/
@rpsAction({verbName:'merge-deep-left'})
async mergeDeepLeft (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.mergeDeepLeft.apply(this,params);
}

/**
 * @function mergeDeepRight
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#mergeDeepRight}
*/
@rpsAction({verbName:'merge-deep-right'})
async mergeDeepRight (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.mergeDeepRight.apply(this,params);
}

/**
 * @function mergeDeepWith
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#mergeDeepWith}
*/
@rpsAction({verbName:'merge-deep-with'})
async mergeDeepWith (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.mergeDeepWith.apply(this,params);
}

/**
 * @function mergeWith
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#mergeWith}
*/
@rpsAction({verbName:'merge-with'})
async mergeWith (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.mergeWith.apply(this,params);
}

/**
 * @function mergeWithKey
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#mergeWithKey}
*/
@rpsAction({verbName:'merge-with-key'})
async mergeWithKey (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.mergeWithKey.apply(this,params);
}

/**
 * @function objOf
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#objOf}
*/
@rpsAction({verbName:'obj-of'})
async objOf (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.objOf.apply(this,params);
}

/**
 * @function omit
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#omit}
*/
@rpsAction({verbName:'omit'})
async omit (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.omit.apply(this,params);
}

/**
 * @function over
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#over}
*/
@rpsAction({verbName:'over'})
async over (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.over.apply(this,params);
}

/**
 * @function path
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#path}
*/
@rpsAction({verbName:'path'})
async path (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.path.apply(this,params);
}

/**
 * @function pathOr
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#pathOr}
*/
@rpsAction({verbName:'path-or'})
async pathOr (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.pathOr.apply(this,params);
}

/**
 * @function pick
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#pick}
*/
@rpsAction({verbName:'pick'})
async pick (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.pick.apply(this,params);
}

/**
 * @function pickAll
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#pickAll}
*/
@rpsAction({verbName:'pick-all'})
async pickAll (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.pickAll.apply(this,params);
}

/**
 * @function pickBy
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#pickBy}
*/
@rpsAction({verbName:'pick-by'})
async pickBy (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.pickBy.apply(this,params);
}

/**
 * @function project
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#project}
*/
@rpsAction({verbName:'project'})
async project (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.project.apply(this,params);
}

/**
 * @function prop
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#prop}
*/
@rpsAction({verbName:'prop'})
async prop (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.prop.apply(this,params);
}

/**
 * @function propOr
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#propOr}
*/
@rpsAction({verbName:'prop-or'})
async propOr (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.propOr.apply(this,params);
}

/**
 * @function props
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#props}
*/
@rpsAction({verbName:'props'})
async props (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.props.apply(this,params);
}

/**
 * @function set
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#set}
*/
@rpsAction({verbName:'set'})
async set (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.set.apply(this,params);
}

/**
 * @function toPairs
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#toPairs}
*/
@rpsAction({verbName:'to-pairs'})
async toPairs (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.toPairs.apply(this,params);
}

/**
 * @function toPairsIn
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#toPairsIn}
*/
@rpsAction({verbName:'to-pairs-in'})
async toPairsIn (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.toPairsIn.apply(this,params);
}

/**
 * @function values
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#values}
*/
@rpsAction({verbName:'values'})
async values (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.values.apply(this,params);
}

/**
 * @function valuesIn
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#valuesIn}
*/
@rpsAction({verbName:'values-in'})
async valuesIn (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.valuesIn.apply(this,params);
}

/**
 * @function view
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#view}
*/
@rpsAction({verbName:'view'})
async view (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.view.apply(this,params);
}

/**
 * @function where
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#where}
*/
@rpsAction({verbName:'where'})
async where (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.where.apply(this,params);
}

/**
 * @function whereEq
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#whereEq}
*/
@rpsAction({verbName:'where-eq'})
async whereEq (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.whereEq.apply(this,params);
}



  // ********  Function  ********

/**
 * @function __
 * @memberof Ramda
 * 
 * 
 * @see {@link https://ramdajs.com/docs/#module.exports}
*/
@rpsAction({verbName:'__'})
async underscore (ctx:RpsContext,opts:{}) : Promise<any> {
  //@ts-ignore
  return R.__;
}

/**
 * @function addIndex
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#addIndex}
*/
@rpsAction({verbName:'add-index'})
async addIndex (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.addIndex.apply(this,params);
}

/**
 * @function always
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#always}
*/
@rpsAction({verbName:'always'})
async always (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.always.apply(this,params);
}

/**
 * @function ap
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#ap}
*/
@rpsAction({verbName:'ap'})
async ap (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.ap.apply(this,params);
}

/**
 * @function apply
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#apply}
*/
@rpsAction({verbName:'apply'})
async apply (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.apply.apply(this,params);
}

/**
 * @function applySpec
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#applySpec}
*/
@rpsAction({verbName:'apply-spec'})
async applySpec (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.applySpec.apply(this,params);
}

/**
 * @function applyTo
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#applyTo}
*/
@rpsAction({verbName:'applyTo'})
async applyTo (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.applyTo.apply(this,params);
}

/**
 * @function ascend
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#ascend}
*/
@rpsAction({verbName:'ascend'})
async ascend (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.ascend.apply(this,params);
}

/**
 * @function binary
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#binary}
*/
@rpsAction({verbName:'binary'})
async binary (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.binary.apply(this,params);
}

/**
 * @function bind
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#bind}
*/
@rpsAction({verbName:'bind'})
async bind (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.bind.apply(this,params);
}

/**
 * @function call
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#call}
*/
@rpsAction({verbName:'call'})
async call (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.call.apply(this,params);
}

/**
 * @function comparator
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#comparator}
*/
@rpsAction({verbName:'comparator'})
async comparator (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.comparator.apply(this,params);
}

/**
 * @function compose
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#compose}
*/
@rpsAction({verbName:'compose'})
async compose (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.compose.apply(this,params);
}

/**
 * @function composeK
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#composeK}
*/
@rpsAction({verbName:'composeK'})
async composeK (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.composeK.apply(this,params);
}

/**
 * @function composeP
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#composeP}
*/
@rpsAction({verbName:'composeP'})
async composeP (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.composeP.apply(this,params);
}

/**
 * @function construct
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#construct}
*/
@rpsAction({verbName:'construct'})
async construct (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.construct.apply(this,params);
}

/**
 * @function constructN
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#constructN}
*/
@rpsAction({verbName:'constructN'})
async constructN (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.constructN.apply(this,params);
}

/**
 * @function converge
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#converge}
*/
@rpsAction({verbName:'converge'})
async converge (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.converge.apply(this,params);
}

/**
 * @function curry
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#curry}
*/
@rpsAction({verbName:'curry'})
async curry (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.curry.apply(this,params);
}

/**
 * @function curryN
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#curryN}
*/
@rpsAction({verbName:'curryN'})
async curryN (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.curryN.apply(this,params);
}

/**
 * @function descend
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#descend}
*/
@rpsAction({verbName:'descend'})
async descend (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.descend.apply(this,params);
}

/**
 * @function empty
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#empty}
*/
@rpsAction({verbName:'empty'})
async empty (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.empty.apply(this,params);
}

/**
 * @function F
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#F}
*/
@rpsAction({verbName:'f'})
async F (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.F.apply(this,params);
}

/**
 * @function flip
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#flip}
*/
@rpsAction({verbName:'flip'})
async flip (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.flip.apply(this,params);
}

/**
 * @function identity
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#identity}
*/
@rpsAction({verbName:'identity'})
async identity (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.identity.apply(this,params);
}

/**
 * @function invoker
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#invoker}
*/
@rpsAction({verbName:'invoker'})
async invoker (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.invoker.apply(this,params);
}

/**
 * @function juxt
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#juxt}
*/
@rpsAction({verbName:'juxt'})
async juxt (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.juxt.apply(this,params);
}

/**
 * @function lift
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#lift}
*/
@rpsAction({verbName:'lift'})
async lift (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.lift.apply(this,params);
}

/**
 * @function liftN
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#liftN}
*/
@rpsAction({verbName:'liftN'})
async liftN (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.liftN.apply(this,params);
}

/**
 * @function memoize
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#memoize}
*/
@rpsAction({verbName:'memoize'})
async memoize (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.memoize.apply(this,params);
}

/**
 * @function memoizeWith
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#memoizeWith}
*/
@rpsAction({verbName:'memoize-with'})
async memoizeWith (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.memoizeWith.apply(this,params);
}

// /**
//  * @function module.export
//  * @memberof Ramda
//  * 
//  * @param {Array} params 
//  * 
//  * @see {@link https://lodash.com/docs#module.export}
// */
// @rpsAction({verbName:'module.export'})
// async module.export (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
//   return R.module.export.apply(this,params);
// }

/**
 * @function nAry
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#nAry}
*/
@rpsAction({verbName:'n-ary'})
async nAry (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.nAry.apply(this,params);
}

/**
 * @function nthArg
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#nthArg}
*/
@rpsAction({verbName:'nth-arg'})
async nthArg (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.nthArg.apply(this,params);
}

/**
 * @function o
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#o}
*/
@rpsAction({verbName:'o'})
async o (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  //@ts-ignore
  return R.o.apply(this,params);
}

/**
 * @function of
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#of}
*/
@rpsAction({verbName:'of'})
async of (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.of.apply(this,params);
}

/**
 * @function once
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#once}
*/
@rpsAction({verbName:'once'})
async once (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.once.apply(this,params);
}

/**
 * @function partial
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#partial}
*/
@rpsAction({verbName:'partial'})
async partial (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.partial.apply(this,params);
}

/**
 * @function partialRight
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#partialRight}
*/
@rpsAction({verbName:'partial-right'})
async partialRight (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.partialRight.apply(this,params);
}

/**
 * @function pipe
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#pipe}
*/
@rpsAction({verbName:'pipe'})
async pipe (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.pipe.apply(this,params);
}

/**
 * @function pipeK
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#pipeK}
*/
@rpsAction({verbName:'pipe-k'})
async pipeK (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.pipeK.apply(this,params);
}

/**
 * @function pipeP
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#pipeP}
*/
@rpsAction({verbName:'pipe-p'})
async pipeP (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.pipeP.apply(this,params);
}

/**
 * @function t
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#T}
*/
@rpsAction({verbName:'t'})
async t (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.T.apply(this,params);
}

/**
 * @function tap
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#tap}
*/
@rpsAction({verbName:'tap'})
async tap (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.tap.apply(this,params);
}

/**
 * @function tryCatch
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#tryCatch}
*/
@rpsAction({verbName:'try-catch'})
async tryCatch (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.tryCatch.apply(this,params);
}

/**
 * @function unapply
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#unapply}
*/
@rpsAction({verbName:'unapply'})
async unapply (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.unapply.apply(this,params);
}

/**
 * @function unary
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#unary}
*/
@rpsAction({verbName:'unary'})
async unary (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.unary.apply(this,params);
}

/**
 * @function uncurryN
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#uncurryN}
*/
@rpsAction({verbName:'uncurry-n'})
async uncurryN (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.uncurryN.apply(this,params);
}

/**
 * @function useWith
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#useWith}
*/
@rpsAction({verbName:'use-with'})
async useWith (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.useWith.apply(this,params);
}


  // ********  Logic  ********

/**
 * @function allPass
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#allPass}
*/
@rpsAction({verbName:'all-pass'})
async allPass (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.allPass.apply(this,params);
}

/**
 * @function and
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#and}
*/
@rpsAction({verbName:'and'})
async and (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.and.apply(this,params);
}

/**
 * @function anyPass
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#anyPass}
*/
@rpsAction({verbName:'any-pass'})
async anyPass (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.anyPass.apply(this,params);
}

/**
 * @function both
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#both}
*/
@rpsAction({verbName:'both'})
async both (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.both.apply(this,params);
}

/**
 * @function complement
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#complement}
*/
@rpsAction({verbName:'complement'})
async complement (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.complement.apply(this,params);
}

/**
 * @function cond
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#cond}
*/
@rpsAction({verbName:'cond'})
async cond (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.cond.apply(this,params);
}

/**
 * @function defaultTo
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#defaultTo}
*/
@rpsAction({verbName:'default-to'})
async defaultTo (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.defaultTo.apply(this,params);
}

/**
 * @function either
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#either}
*/
@rpsAction({verbName:'either'})
async either (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.either.apply(this,params);
}

/**
 * @function ifElse
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#ifElse}
*/
@rpsAction({verbName:'if-else'})
async ifElse (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.ifElse.apply(this,params);
}

/**
 * @function isEmpty
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#isEmpty}
*/
@rpsAction({verbName:'is-empty'})
async isEmpty (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.isEmpty.apply(this,params);
}

/**
 * @function not
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#not}
*/
@rpsAction({verbName:'not'})
async not (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.not.apply(this,params);
}

/**
 * @function or
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#or}
*/
@rpsAction({verbName:'or'})
async or (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.or.apply(this,params);
}

/**
 * @function pathSatisfies
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#pathSatisfies}
*/
@rpsAction({verbName:'path-satisfies'})
async pathSatisfies (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.pathSatisfies.apply(this,params);
}

/**
 * @function propSatisfies
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#propSatisfies}
*/
@rpsAction({verbName:'prop-satisfies'})
async propSatisfies (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.propSatisfies.apply(this,params);
}

/**
 * @function unless
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#unless}
*/
@rpsAction({verbName:'unless'})
async unless (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.unless.apply(this,params);
}

/**
 * @function until
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#until}
*/
@rpsAction({verbName:'until'})
async until (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.until.apply(this,params);
}

/**
 * @function when
 * @memberof Ramda
 * 
 * @param {Array} params 
 * 
 * @see {@link https://lodash.com/docs#when}
*/
@rpsAction({verbName:'when'})
async when (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.when.apply(this,params);
}

  // ********  Relation  ********

 /**
 * @function clamp
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#clamp}
*/
@rpsAction({verbName:'clamp'})
async clamp (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.clamp.apply(this,params);
}

 /**
 * @function countBy
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#countBy}
*/
@rpsAction({verbName:'count-by'})
async countBy (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.countBy.apply(this,params);
}

 /**
 * @function difference
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#difference}
*/
@rpsAction({verbName:'difference'})
async difference (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.difference.apply(this,params);
}

 /**
 * @function differenceWith
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#differenceWith}
*/
@rpsAction({verbName:'difference-with'})
async differenceWith (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.differenceWith.apply(this,params);
}

 /**
 * @function eqBy
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#eqBy}
*/
@rpsAction({verbName:'eq-by'})
async eqBy (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.eqBy.apply(this,params);
}

 /**
 * @function equals
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#equals}
*/
@rpsAction({verbName:'equals'})
async equals (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.equals.apply(this,params);
}

 /**
 * @function gt
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#gt}
*/
@rpsAction({verbName:'gt'})
async gt (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.gt.apply(this,params);
}

 /**
 * @function gte
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#gte}
*/
@rpsAction({verbName:'gte'})
async gte (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.gte.apply(this,params);
}

 /**
 * @function identical
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#identical}
*/
@rpsAction({verbName:'identical'})
async identical (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.identical.apply(this,params);
}

 /**
 * @function innerJoin
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#innerJoin}
*/
@rpsAction({verbName:'inner-join'})
async innerJoin (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  //@ts-ignore
  return R.innerJoin.apply(this,params);
}

 /**
 * @function intersection
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#intersection}
*/
@rpsAction({verbName:'intersection'})
async intersection (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.intersection.apply(this,params);
}

 /**
 * @function lt
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#lt}
*/
@rpsAction({verbName:'lt'})
async lt (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.lt.apply(this,params);
}

 /**
 * @function lte
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#lte}
*/
@rpsAction({verbName:'lte'})
async lte (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.lte.apply(this,params);
}

 /**
 * @function max
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#max}
*/
@rpsAction({verbName:'max'})
async max (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.max.apply(this,params);
}

 /**
 * @function maxBy
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#maxBy}
*/
@rpsAction({verbName:'max-by'})
async maxBy (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.maxBy.apply(this,params);
}

 /**
 * @function min
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#min}
*/
@rpsAction({verbName:'min'})
async min (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.min.apply(this,params);
}

 /**
 * @function minBy
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#minBy}
*/
@rpsAction({verbName:'min-by'})
async minBy (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.minBy.apply(this,params);
}

 /**
 * @function pathEq
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#pathEq}
*/
@rpsAction({verbName:'path-eq'})
async pathEq (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.pathEq.apply(this,params);
}

 /**
 * @function propEq
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#propEq}
*/
@rpsAction({verbName:'prop-eq'})
async propEq (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.propEq.apply(this,params);
}

 /**
 * @function sortBy
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#sortBy}
*/
@rpsAction({verbName:'sort-by'})
async sortBy (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.sortBy.apply(this,params);
}

 /**
 * @function sortWith
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#sortWith}
*/
@rpsAction({verbName:'sort-with'})
async sortWith (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.sortWith.apply(this,params);
}

 /**
 * @function symmetricDifference
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#symmetricDifference}
*/
@rpsAction({verbName:'symmetric-difference'})
async symmetricDifference (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.symmetricDifference.apply(this,params);
}

 /**
 * @function symmetricDifferenceWith
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#symmetricDifferenceWith}
*/
@rpsAction({verbName:'symmetric-difference-with'})
async symmetricDifferenceWith (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.symmetricDifferenceWith.apply(this,params);
}

 /**
 * @function union
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#union}
*/
@rpsAction({verbName:'union'})
async union (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.union.apply(this,params);
}

 /**
 * @function unionWith
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#unionWith}
*/
@rpsAction({verbName:'union-with'})
async unionWith (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.unionWith.apply(this,params);
}


  // ********  Type  ********

 /**
 * @function is
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#is}
*/
@rpsAction({verbName:'is'})
async is (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.is.apply(this,params);
}

 /**
 * @function isNil
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#isNil}
*/
@rpsAction({verbName:'is-nil'})
async isNil (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.isNil.apply(this,params);
}

 /**
 * @function propIs
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#propIs}
*/
@rpsAction({verbName:'prop-is'})
async propIs (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.propIs.apply(this,params);
}

 /**
 * @function type
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#type}
*/
@rpsAction({verbName:'type'})
async type (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.type.apply(this,params);
}

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

 /**
 * @function dec
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#dec}
*/
@rpsAction({verbName:'dec'})
async dec (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.dec.apply(this,params);
}

 /**
 * @function divide
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#divide}
*/
@rpsAction({verbName:'divide'})
async divide (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.divide.apply(this,params);
}

 /**
 * @function inc
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#inc}
*/
@rpsAction({verbName:'inc'})
async inc (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.inc.apply(this,params);
}

 /**
 * @function mathMod
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#mathMod}
*/
@rpsAction({verbName:'math-mod'})
async mathMod (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.mathMod.apply(this,params);
}

 /**
 * @function mean
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#mean}
*/
@rpsAction({verbName:'mean'})
async mean (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.mean.apply(this,params);
}

 /**
 * @function median
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#median}
*/
@rpsAction({verbName:'median'})
async median (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.median.apply(this,params);
}

 /**
 * @function modulo
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#modulo}
*/
@rpsAction({verbName:'modulo'})
async modulo (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.modulo.apply(this,params);
}

 /**
 * @function multiply
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#multiply}
*/
@rpsAction({verbName:'multiply'})
async multiply (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.multiply.apply(this,params);
}

 /**
 * @function negate
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#negate}
*/
@rpsAction({verbName:'negate'})
async negate (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.negate.apply(this,params);
}

 /**
 * @function product
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#product}
*/
@rpsAction({verbName:'product'})
async product (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.product.apply(this,params);
}

 /**
 * @function subtract
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#subtract}
*/
@rpsAction({verbName:'subtract'})
async subtract (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.subtract.apply(this,params);
}

 /**
 * @function sum
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#sum}
*/
@rpsAction({verbName:'sum'})
async sum (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.sum.apply(this,params);
}

  // ********  String  ********

 /**
 * @function trim
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#trim}
*/
@rpsAction({verbName:'trim'})
async trim (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.trim.apply(this,params);
}

 /**
 * @function match
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#match}
*/
@rpsAction({verbName:'match'})
async match (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.match.apply(this,params);
}

 /**
 * @function replace
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#replace}
*/
@rpsAction({verbName:'replace'})
async replace (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.replace.apply(this,params);
}

 /**
 * @function split
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#split}
*/
@rpsAction({verbName:'split'})
async split (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.split.apply(this,params);
}

 /**
 * @function test
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#test}
*/
@rpsAction({verbName:'test'})
async test (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.test.apply(this,params);
}

 /**
 * @function toLower
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#toLower}
*/
@rpsAction({verbName:'to-lower'})
async toLower (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.toLower.apply(this,params);
}

 /**
 * @function toString
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#toString}
*/
@rpsAction({verbName:'to-string'})
async toString (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.toString.apply(this,params);
}

 /**
 * @function toUpper
 * @memberof Ramda
 * 
 * @param {Array} params
 * 
 * @see {@link https://lodash.com/docs#toUpper}
*/
@rpsAction({verbName:'to-upper'})
async toUpper (ctx:RpsContext,opts:{}, ...params:any[]) : Promise<any> {
  return R.toUpper.apply(this,params);
}

// ********** CUSTOMIZE **********

 /**
 * @function regexp
 * @memberof Ramda
 * 
 * @param {RegExp} regexp regular expression
 * 
*/
@rpsAction({verbName:'regexp'})
async regexp (ctx:RpsContext,opts:{}, regexp:string) : Promise<RegExp> {
  return new RegExp(regexp);
}


}

