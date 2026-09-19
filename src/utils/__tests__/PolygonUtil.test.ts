import {IPoint} from '../../interfaces/IPoint';
import {PolygonUtil} from '../PolygonUtil';

describe('PolygonUtil.canRemoveVertex tests', () => {
    test('return true when at least 3 vertices would remain', () => {
        // given
        const vertices: IPoint[] = [
            { x: 0, y: 0 },
            { x: 10, y: 0 },
            { x: 10, y: 10 },
            { x: 0, y: 10 }
        ];

        // when
        const result = PolygonUtil.canRemoveVertex(vertices);

        // then
        expect(result).toBe(true);
    });

    test('return false when polygon has exactly 3 vertices', () => {
        // given
        const vertices: IPoint[] = [
            { x: 0, y: 0 },
            { x: 10, y: 0 },
            { x: 10, y: 10 }
        ];

        // when
        const result = PolygonUtil.canRemoveVertex(vertices);

        // then
        expect(result).toBe(false);
    });

    test('return false when polygon has fewer than 3 vertices', () => {
        // given
        const vertices: IPoint[] = [
            { x: 0, y: 0 },
            { x: 10, y: 0 }
        ];

        // when
        const result = PolygonUtil.canRemoveVertex(vertices);

        // then
        expect(result).toBe(false);
    });
});

describe('PolygonUtil.removeVertex tests', () => {
    test('remove vertex at given index and preserve order of the remaining ones', () => {
        // given
        const vertices: IPoint[] = [
            { x: 0, y: 0 },
            { x: 10, y: 0 },
            { x: 10, y: 10 },
            { x: 0, y: 10 }
        ];

        // when
        const result = PolygonUtil.removeVertex(vertices, 1);

        // then
        expect(result).toEqual([
            { x: 0, y: 0 },
            { x: 10, y: 10 },
            { x: 0, y: 10 }
        ]);
    });

    test('do not mutate input vertices', () => {
        // given
        const vertices: IPoint[] = [
            { x: 0, y: 0 },
            { x: 10, y: 0 },
            { x: 10, y: 10 },
            { x: 0, y: 10 }
        ];

        // when
        PolygonUtil.removeVertex(vertices, 0);

        // then
        expect(vertices.length).toBe(4);
    });

    test('return all vertices when index is out of range', () => {
        // given
        const vertices: IPoint[] = [
            { x: 0, y: 0 },
            { x: 10, y: 0 },
            { x: 10, y: 10 }
        ];

        // when
        const result = PolygonUtil.removeVertex(vertices, 7);

        // then
        expect(result).toEqual(vertices);
    });
});
