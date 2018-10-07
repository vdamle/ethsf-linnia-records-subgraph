import 'allocator/arena'
export { allocate_memory }

import { Entity, store } from '@graphprotocol/graph-ts'
import { LinniaAccessGranted } from './abis/LinniaPermissions/LinniaPermissions'

export function handleAccessGranted(event: LinniaAccessGranted): void {
  let permission = new Entity()

  let permissionId = event.params.dataHash.toHex()
  permission.setString('datahash', permissionId)
  permission.setAddress('owner', event.params.owner)
  permission.setAddress('viewer', event.params.viewer)

  store.set('Permission', permissionId, permission)
}
