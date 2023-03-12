/** Unleash your inner wolf with the Werewolf class! */
class Werewolf {
  constructor(private readonly name: string, private hungerLevel: number) {}

  /** Use the `hunt` method to terrorize your prey under the moonlight. */
  public hunt(): void {
    console.log(`It's midnight, and ${this.name} is hungry...`);

    const success = Math.random() < 0.5;

    this.hungerLevel += success ? -10 : 10;

    console.log(
      success
        ? `${this.name} caught some prey!`
        : `${this.name} couldn't find any prey.`
    );
  }
}

const werewolf = new Werewolf("Luna", 50);
werewolf.hunt();

export default werewolf;
