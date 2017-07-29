/**
 * The FilterableSearchService for the intelligent search of data entry.
 */

import { FilterableSearchService } from './filterable-search.component';
import { Observable } from 'rxjs/Observable';
import { Variant } from './genomic-data';

export class IntelligentGenomicsSearchService implements FilterableSearchService {
  public search = (term: string): Observable<Variant[]> => {
    return null;
  }
}
