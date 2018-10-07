import 'allocator/arena'
export { allocate_memory }

import { Entity, store } from '@graphprotocol/graph-ts'
import { LinniaRecordAdded, LinniaRecordSigAdded } from './abis/LinniaRecords/LinniaRecords'

export function handleRecordAdded(event: LinniaRecordAdded): void {
  let record = new Entity()
  let recordId = event.params.dataHash.toHex()
  record.setString('datahash', recordId)
  record.setAddress('owner', event.params.owner)
  record.setString('metadata', event.params.metadata)
  store.set('Record', recordId, record)
}

export function handleRecordSigAdded(event: LinniaRecordSigAdded): void {
  let recordId = event.params.dataHash.toHex()
  let record = store.get('Record', recordId) as Entity
  record.setU256('irisscore', event.params.irisScore)
  store.set('Record', recordId, record)
}
