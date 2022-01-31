import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity({ name: 'usuarios' })
export class PgUser {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ name: 'nome', nullable: true })
  name!: string

  @Column()
  email!: string
}
