/**
 * Комбинация интерфейсов
 */
interface ShapeColor {
  color: string;
}

interface PenStroke {
  penWidth: number;
}


interface ISquare extends ShapeColor, PenStroke {
  sideLength: number;
}

let square: ISquare;

square = {
  color: "blue",
  sideLength: 10,
  // penWidth: 5,
};
