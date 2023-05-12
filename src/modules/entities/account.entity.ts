type AccountId = string;

export class AccountEntity {
  constructor(private readonly id: AccountId) {}

  getId() {
    return this.id;
  }
}
