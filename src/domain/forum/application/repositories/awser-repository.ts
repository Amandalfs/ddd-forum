import { Awser } from '../../enterprise/entities/awser'

export interface AwserRepository {
  create(awser: Awser): Promise<void>
}
