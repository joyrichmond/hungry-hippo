export default interface Transaction {
  _id?: string;
  categoryId: string;
  date: Date;
  amount: number;
  vendor: string;
}
