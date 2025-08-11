import {artistType} from './artistType'
import {eventType} from './eventType'
import {configType} from './configType'
import {memberType} from './memberType'
import {portfolioType} from './portfolioType'

export const schemaTypes = [configType, artistType, eventType, memberType, portfolioType] as const
