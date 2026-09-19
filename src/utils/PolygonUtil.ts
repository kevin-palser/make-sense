import {IPoint} from '../interfaces/IPoint';
import {ILine} from '../interfaces/ILine';
import {Settings} from '../settings/Settings';

export class PolygonUtil {
    public static getEdges(vertices: IPoint[], closed: boolean = true): ILine[] {
        const points: IPoint[] = closed ? vertices.concat(vertices[0]) : vertices;
        const lines: ILine[] = [];
        for (let i = 0; i < points.length - 1; i++) {
            lines.push({start: points[i], end: points[i + 1]})
        }
        return lines;
    }

    public static canRemoveVertex(vertices: IPoint[]): boolean {
        return vertices.length > Settings.POLYGON_MIN_VERTICES_COUNT;
    }

    public static removeVertex(vertices: IPoint[], index: number): IPoint[] {
        return vertices.filter((vertex: IPoint, vertexIndex: number) => vertexIndex !== index);
    }
}
