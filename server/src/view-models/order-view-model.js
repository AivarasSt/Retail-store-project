class OrderViewModel {
  constructor({ _id, name, surname, phoneNumber, city, country }) {
    this.id = _id;
    this.name = name;
    this.surname = surname;
    this.phoneNumber = phoneNumber;
    this.city = city;
    this.country = country;
  }
}

module.exports = OrderViewModel;