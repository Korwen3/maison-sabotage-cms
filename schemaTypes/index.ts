import {artistType} from './artistType'
import {eventType} from './eventType'
import {configType} from './configType'
import {memberType} from './memberType'

export const schemaTypes = [configType, artistType, eventType, memberType] as const
