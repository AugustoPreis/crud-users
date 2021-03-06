import { Column, Entity, PrimaryColumn } from 'typeorm';
import { uuid } from 'uuidv4';

@Entity({ name: 'users' })
export class User {
	@PrimaryColumn('varchar', { default: uuid() })
	public readonly id: string;

	@Column('varchar', { length: 200 })
	public name: string;

	@Column('varchar', { length: 200 })
	public email: string;

	@Column('varchar', { length: 50 })
	public password: string;

	constructor(props: User) {
		if (!props?.id) this.id = uuid();

		Object.assign(this, props);
	}
}