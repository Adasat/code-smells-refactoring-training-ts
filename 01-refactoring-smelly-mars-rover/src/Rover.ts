enum Direction {
  N = "N",
  S = "S",
  W = "W",
  E = "E",
}

export class Rover {
  private direction: Direction;
  private y: number;
  private x: number;

  constructor(x: number, y: number, direction: string) {
    this.x = x;
    this.y = y;
    this.direction = direction as Direction;
    
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
      this.rotateLeft();
    } else if (command === "r") {
      // Rotate Rover
      this.rotateRigth();
    } else {
      // Displace Rover
      let displacement1 = -1;

      if (command === "f") {
        displacement1 = 1;
      }
      let displacement = displacement1;

      if (this.direction === Direction.N) {
        this.y += displacement;
      } else if (this.direction === Direction.S) {
        this.y -= displacement;
      } else if (this.direction === Direction.W) {
        this.x -= displacement;
      } else {
        this.x += displacement;
      }
    }
  }

  private rotateRigth() {
    if (this.direction === Direction.N) {
      this.direction = Direction.E;
    } else if (this.direction === Direction.S) {
      this.direction = Direction.W;
    } else if (this.direction === Direction.W) {
      this.direction = Direction.N;
    } else {
      this.direction = Direction.S;
    }
  }

  private rotateLeft() {
    if (this.direction === Direction.N) {
      this.direction = Direction.W;
    } else if (this.direction === Direction.S) {
      this.direction = Direction.E;
    } else if (this.direction === Direction.W) {
      this.direction = Direction.S;
    } else {
      this.direction = Direction.N;
    }
  }
}
