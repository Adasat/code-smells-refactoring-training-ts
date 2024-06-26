import { describe, it, beforeEach, expect } from "vitest";
import { Customer } from "../src/Customer";
import { Rental } from "../src/Rental";
import { Movie } from "../src/Movie";

describe("Video Store", () => {
  let customer: Customer;

  beforeEach(() => {
    customer = new Customer("Fred");
  });

  it("single new release statement", () => {
    customer.addRental(new Rental(new Movie("The Cell", Movie.NEW_RELEASE), 3));

    expect(customer.statement()).toEqual(
      "Rental Record for Fred\n\tThe Cell\t9.0\nYou owed 9.0\nYou earned 2 frequent renter points\n"
    );
  });

  it("dual new release statement", () => {
    customer.addRental(new Rental(new Movie("The Cell", Movie.NEW_RELEASE), 3));
    customer.addRental(
      new Rental(new Movie("The Tigger Movie", Movie.NEW_RELEASE), 3)
    );

    expect(customer.statement()).toEqual(
      "Rental Record for Fred\n\tThe Cell\t9.0\n\tThe Tigger Movie\t9.0\nYou owed 18.0\nYou earned 4 frequent renter points\n"
    );
  });

  it("single childrens statement", () => {
    customer.addRental(
      new Rental(new Movie("The Tigger Movie", Movie.CHILDREN), 3)
    );

    expect(customer.statement()).toEqual(
      "Rental Record for Fred\n\tThe Tigger Movie\t1.5\nYou owed 1.5\nYou earned 1 frequent renter points\n"
    );
  });

  it("single childrens statement rented more than three days ago", () => {
    customer.addRental(
      new Rental(new Movie("The Tigger Movie", Movie.CHILDREN), 4)
    );

    expect(customer.statement()).toEqual(
      "Rental Record for Fred\n\tThe Tigger Movie\t3.0\nYou owed 3.0\nYou earned 1 frequent renter points\n"
    );
  });

  it("multiple regular statement", () => {
    customer.addRental(
      new Rental(new Movie("Plan 9 from Outer Space", Movie.REGULAR), 1)
    );
    customer.addRental(new Rental(new Movie("8 1/2", Movie.REGULAR), 2));
    customer.addRental(new Rental(new Movie("Eraserhead", Movie.REGULAR), 3));

    expect(customer.statement()).toEqual(
      "Rental Record for Fred\n\tPlan 9 from Outer Space\t2.0\n\t8 1/2\t2.0\n\tEraserhead\t3.5\nYou owed 7.5\nYou earned 3 frequent renter points\n"
    );
  });
});
