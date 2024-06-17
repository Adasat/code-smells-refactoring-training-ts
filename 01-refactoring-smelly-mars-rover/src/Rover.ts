export class Rover {
  private direction: string;
  private y: number;
  private x: number;

  constructor(x: number, y: number, direction: string) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  public receive(commandsSequence: string) {
    for (let i = 0; i < commandsSequence.length; ++i) {
      const command = commandsSequence.substring(i, i + 1);

      this.process(command);
    }
  }

  private process(command: string) {
    if (command === "l") {
      // Rotate Rover
      if (this.direction === "N") {
        this.direction = "W";
      } else if (this.direction === "S") {
        this.direction = "E";
      } else if (this.direction === "W") {
        this.direction = "S";
      } else {
        this.direction = "N";
      }
    } else if (command === "r") {
      // Rotate Rover
      if (this.direction === "N") {
        this.direction = "E";
      } else if (this.direction === "S") {
        this.direction = "W";
      } else if (this.direction === "W") {
        this.direction = "N";
      } else {
        this.direction = "S";
      }
    } else {
      // Displace Rover
      let displacement1 = -1;

      if (command === "f") {
        displacement1 = 1;
      }
      let displacement = displacement1;

      if (this.direction === "N") {
        this.y += displacement;
      } else if (this.direction === "S") {
        this.y -= displacement;
      } else if (this.direction === "W") {
        this.x -= displacement;
      } else {
        this.x += displacement;
      }
    }
  }
}
