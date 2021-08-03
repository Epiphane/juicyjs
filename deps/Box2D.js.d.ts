export module Common {
    export class Color {
        constructor(rr: number, gg: number, bb: number);
        set(rr: number, gg: number, bb: number): void;
        r(rr: number): void;
        g(gg: number): void;
        b(bb: number): void;
        color: number;
    }

    export class Settings {
        static VERSION: string;
        static USHRT_MAX: number;
        static PI: number;
        static MAX_MANIFOLD_POINTS: number;
        static AABB_EXTENSION: number;
        static AABB_MULTIPLIER: number;
        static POLYGON_RADIUS: number;
        static LINEAR_SLOP: number;
        static ANGULAR_SLOP: number;
        static TOI_SLOP: number;
        static MAX_TOI_CONTACTS_PER_ISLAND: number;
        static MAX_TOI_JOINTS_PER_ISLAND: number;
        static VELOCITY_THRESHOLD: number;
        static MAX_LINEAR_CORRECTION: number;
        static MAX_ANGULAR_CORRECTION: number;
        static MAX_TRANSLATION: number;
        static MAX_TRANSLATION_SQUARED: number;
        static MAX_ROTATION: number;
        static MAX_ROTATION_SQUARED: number;
        static CONTACT_BAUMGARTE: number;
        static TIME_TO_SLEEP: number;
        static LINEAR_SLEEP_TOLERANCE: number;
        static ANGULAR_SLEEP_TOLERANCE: number;
        static mixFriction(friction1: number, friction2: number): number;
        static mixRestitution(restitution1: number, restitution2: number): number;
        static assert(a: boolean): void;
    }
}
export module Common.Math {
    export class Mat22 {
        col1: Common.Math.Vec2;
        col2: Common.Math.Vec2;
        constructor();
        static fromAngle(angle: number): Common.Math.Mat22;
        static fromVV(c1: Common.Math.Vec2, c2: Common.Math.Vec2): Common.Math.Mat22;
        set(angle: number): void;
        setVV(c1: Common.Math.Vec2, c2: Common.Math.Vec2): void;
        copy(): Common.Math.Mat22;
        setM(m: Common.Math.Mat22): void;
        addM(m: Common.Math.Mat22): void;
        setIdentity(): void;
        setZero(): void;
        getAngle(): number;
        getInverse(out: Common.Math.Mat22): Common.Math.Mat22;
        solve(out: Common.Math.Vec2, bX: number, bY: number): Common.Math.Vec2;
        abs(): void;
    }
    export class Mat33 {
        col1: Common.Math.Vec3;
        col2: Common.Math.Vec3;
        col3: Common.Math.Vec3;
        constructor(c1?: Common.Math.Vec3, c2?: Common.Math.Vec3, c3?: Common.Math.Vec3);
        setVVV(c1: Common.Math.Vec3, c2: Common.Math.Vec3, c3: Common.Math.Vec3): void;
        copy(): Common.Math.Mat33;
        setM(m: Common.Math.Mat33): void;
        addM(m: Common.Math.Mat33): void;
        setIdentity(): void;
        setZero(): void;
        solve22(out: Common.Math.Vec2, bX: number, bY: number): Common.Math.Vec2;
        solve33(out: Common.Math.Vec3, bX: number, bY: number, bZ: number): Common.Math.Vec3;
    }
    export class Math {
        static VEC2_ZERO: Common.Math.Vec2;
        static MAT22_IDENTITY: Common.Math.Mat22;
        static TRANSFORM_IDENTITY: Common.Math.Transform;
        static isValid(x: number): boolean;
        static dot(a: Common.Math.Vec2, b: Common.Math.Vec2): number;
        static crossVV(a: Common.Math.Vec2, b: Common.Math.Vec2): number;
        static crossVF(a: Common.Math.Vec2, s: number): Common.Math.Vec2;
        static crossFV(s: number, a: Common.Math.Vec2): Common.Math.Vec2;
        static mulMV(A: Common.Math.Mat22, v: Common.Math.Vec2): Common.Math.Vec2;
        static mulTMV(A: Common.Math.Mat22, v: Common.Math.Vec2): Common.Math.Vec2;
        static mulX(T: Common.Math.Transform, v: Common.Math.Vec2): Common.Math.Vec2;
        static mulXT(T: Common.Math.Transform, v: Common.Math.Vec2): Common.Math.Vec2;
        static addVV(a: Common.Math.Vec2, b: Common.Math.Vec2): Common.Math.Vec2;
        static subtractVV(a: Common.Math.Vec2, b: Common.Math.Vec2): Common.Math.Vec2;
        static distance(a: Common.Math.Vec2, b: Common.Math.Vec2): number;
        static distanceSquared(a: Common.Math.Vec2, b: Common.Math.Vec2): number;
        static mulFV(s: number, a: Common.Math.Vec2): Common.Math.Vec2;
        static addMM(A: Common.Math.Mat22, B: Common.Math.Mat22): Common.Math.Mat22;
        static mulMM(A: Common.Math.Mat22, B: Common.Math.Mat22): Common.Math.Mat22;
        static mulTMM(A: Common.Math.Mat22, B: Common.Math.Mat22): Common.Math.Mat22;
        static abs(a: number): number;
        static absV(a: Common.Math.Vec2): Common.Math.Vec2;
        static absM(A: Common.Math.Mat22): Common.Math.Mat22;
        static min(a: number, b: number): number;
        static minV(a: Common.Math.Vec2, b: Common.Math.Vec2): Common.Math.Vec2;
        static max(a: number, b: number): number;
        static maxV(a: Common.Math.Vec2, b: Common.Math.Vec2): Common.Math.Vec2;
        static clamp(a: number, low: number, high: number): number;
        static clampV(a: Common.Math.Vec2, low: Common.Math.Vec2, high: Common.Math.Vec2): Common.Math.Vec2;
        static swap(a: any[], b: any[]): void;
        static random(): number;
        static randomRange(lo: number, hi: number): number;
        static nextPowerOfTwo(x: number): number;
        static isPowerOfTwo(x: number): boolean;
    }
    export class Sweep {
        localCenter: Common.Math.Vec2;
        c0: Common.Math.Vec2;
        c: Common.Math.Vec2;
        a0: number;
        a: number;
        t0: number;
        set(other: Common.Math.Sweep): void;
        copy(): Common.Math.Sweep;
        getTransform(xf: Common.Math.Transform, alpha: number): void;
        advance(t: number): void;
    }
    export class Transform {
        position: Common.Math.Vec2;
        R: Common.Math.Mat22;
        constructor(pos?: Common.Math.Vec2, r?: Common.Math.Mat22);
        initialize(pos: Common.Math.Vec2, r: Common.Math.Mat22): void;
        setIdentity(): void;
        set(x: Common.Math.Transform): void;
        getAngle(): number;
    }
    export class Vec2 {
        x: number;
        y: number;
        constructor(x_?: number, y_?: number);
        setZero(): void;
        set(x_?: number, y_?: number): void;
        setV(v: Common.Math.Vec2): void;
        getNegative(): Common.Math.Vec2;
        negativeSelf(): void;
        static make(x_: number, y_: number): Common.Math.Vec2;
        copy(): Common.Math.Vec2;
        add(v: Common.Math.Vec2): void;
        subtract(v: Common.Math.Vec2): void;
        multiply(a: number): void;
        mulM(A: Common.Math.Mat22): void;
        mulTM(A: Common.Math.Mat22): void;
        crossVF(s: number): void;
        crossFV(s: number): void;
        minV(b: Common.Math.Vec2): void;
        maxV(b: Common.Math.Vec2): void;
        abs(): void;
        length(): number;
        lengthSquared(): number;
        normalize(): number;
        isValid(): boolean;
    }
    export class Vec3 {
        x: number;
        y: number;
        z: number;
        constructor(x?: number, y?: number, z?: number);
        setZero(): void;
        set(x: number, y: number, z: number): void;
        setV(v: Common.Math.Vec3): void;
        getNegative(): Common.Math.Vec3;
        negativeSelf(): void;
        copy(): Common.Math.Vec3;
        add(v: Common.Math.Vec3): void;
        subtract(v: Common.Math.Vec3): void;
        multiply(a: number): void;
    }
}
export module Collision {
    export class RayCastInput {
        p1: Common.Math.Vec2;
        p2: Common.Math.Vec2;
        maxFraction: number;
    }
    export class RayCastOutput {
        normal: Common.Math.Vec2;
        fraction: number;
    }
    export class AABB {
        lowerBound: Common.Math.Vec2;
        upperBound: Common.Math.Vec2;
        isValid(): boolean;
        getCenter(): Common.Math.Vec2;
        getExtents(): Common.Math.Vec2;
        contains(aabb: Collision.AABB): boolean;
        rayCast(output: Collision.RayCastOutput, input: Collision.RayCastInput): boolean;
        testOverlap(other: Collision.AABB): boolean;
        static combine(aabb1: Collision.AABB, aab: Collision.AABB): Collision.AABB;
        combine(aabb1: Collision.AABB, aab: Collision.AABB): void;
    }
    export class Proxy {
        lowerBounds: number[];
        upperBounds: number[];
        overlapCount: number;
        timeStamp: number;
        pairs: { [s: string]: any; };
        next: Collision.Proxy;
        userData: any;
        isValid(): boolean;
    }
    export class Bound {
        value: number;
        proxy: Collision.Proxy;
        stabbingCount: number;
        isLower(): boolean;
        isUpper(): boolean;
        swap(b: Collision.Bound): void;
    }
    export class BoundValues {
        lowerValues: number[];
        upperValues: number[];
        constructor();
    }
    export interface IBroadPhase {
    }
    export class BroadPhase implements IBroadPhase {
        static S_VALIDATE: boolean;
        static INVALID: number;
        static NULL_EDGE: number;
        constructor(worldAABB: Collision.AABB);
        inRange(aabb: Collision.AABB): boolean;
        createProxy(aabb: Collision.AABB, userData: any): any;
        destroyProxy(proxy_: any): void;
        moveProxy(proxy_: any, aabb: Collision.AABB, displacement: Common.Math.Vec2): void;
        updatePairs(callback: (data1: any, data2: any) => void): void;
        testOverlap(proxyA: any, proxyB: any): boolean;
        getUserData(proxy: any): any;
        getFatAABB(proxy_: any): Collision.AABB;
        getProxyCount(): number;
        query(callback: () => any, aabb: Collision.AABB): void;
        validate(): void;
        rebalance(iterations: number): void;
        rayCast(callback: () => any, input: Collision.RayCastInput): void;
        testOverlapBound(b: Collision.BoundValues, p: Collision.Proxy): boolean;
        static binarySearch(bounds: Collision.Bound[], count: number, value: number): number;
    }
    export class Features {
        referenceEdge: number;
        incidentEdge: number;
        incidentVertex: number;
        flip: number;
    }
    export class ContactID {
        features: Collision.Features;
        constructor();
        set(id: Collision.ContactID): void;
        copy(): Collision.ContactID;
        key: number;
    }
    export class ClipVertex {
        v: Common.Math.Vec2;
        id: Collision.ContactID;
        set(other: Collision.ClipVertex): void;
    }
    export class Collision {
        static NULL_FEATURE: number;
        static clipSegmentToLine(vOut: Collision.ClipVertex[], vIn: Collision.ClipVertex[], normal: Common.Math.Vec2, offset: number): number;
        static edgeSeparation(poly1: Collision.Shapes.PolygonShape, xf1: Common.Math.Transform, edge1: number, poly2: Collision.Shapes.PolygonShape, xf2: Common.Math.Transform): number;
        static findMaxSeparation(edgeIndex: number[], poly1: Collision.Shapes.PolygonShape, xf1: Common.Math.Transform, poly2: Collision.Shapes.PolygonShape, xf2: Common.Math.Transform): number;
        static findIncidentEdge(c: Collision.ClipVertex[], poly1: Collision.Shapes.PolygonShape, xf1: Common.Math.Transform, edge1: number, poly2: Collision.Shapes.PolygonShape, xf2: Common.Math.Transform): void;
        static collidePolygons(manifold: Collision.Manifold, polyA: Collision.Shapes.PolygonShape, xfA: Common.Math.Transform, polyB: Collision.Shapes.PolygonShape, xfB: Common.Math.Transform): void;
        static collideCircles(manifold: Collision.Manifold, circle1: Collision.Shapes.CircleShape, xf1: Common.Math.Transform, circle2: Collision.Shapes.CircleShape, xf2: Common.Math.Transform): void;
        static collidePolygonAndCircle(manifold: Collision.Manifold, polygon: Collision.Shapes.PolygonShape, xf1: Common.Math.Transform, circle: Collision.Shapes.CircleShape, xf2: Common.Math.Transform): void;
        static testOverlap(a: Collision.AABB, b: Collision.AABB): boolean;
    }
    export class ContactPoint {
        shape1: Collision.Shapes.Shape;
        shape2: Collision.Shapes.Shape;
        position: Common.Math.Vec2;
        velocity: Common.Math.Vec2;
        normal: Common.Math.Vec2;
        separation: number;
        friction: number;
        restitution: number;
        id: Collision.ContactID;
    }
    export class Distance {
        static distance(output: Collision.DistanceOutput, cache: Collision.SimplexCache, input: Collision.DistanceInput): void;
    }
    export class DistanceInput {
        proxyA: Collision.DistanceProxy;
        proxyB: Collision.DistanceProxy;
        transformA: Common.Math.Transform;
        transformB: Common.Math.Transform;
        useRadii: boolean;
    }
    export class DistanceOutput {
        pointA: Common.Math.Vec2;
        pointB: Common.Math.Vec2;
        distance: number;
        iterations: number;
    }
    export class DistanceProxy {
        m_vertices: Common.Math.Vec2[];
        m_count: number;
        m_radius: number;
        set(shape: Collision.Shapes.Shape): void;
        getSupport(d: Common.Math.Vec2): number;
        getSupportVertex(d: Common.Math.Vec2): Common.Math.Vec2;
        getVertexCount(): number;
        getVertex(index: number): Common.Math.Vec2;
    }
    export class DynamicTree {
        constructor();
        createProxy(aabb: Collision.AABB, userData: any): Collision.DynamicTreeNode;
        destroyProxy(proxy: Collision.DynamicTreeNode): void;
        moveProxy(proxy: Collision.DynamicTreeNode, aabb: Collision.AABB, displacement: Common.Math.Vec2): boolean;
        rebalance(iterations: number): void;
        getFatAABB(proxy: Collision.DynamicTreeNode): Collision.AABB;
        getUserData(proxy: Collision.DynamicTreeNode): any;
        query(callback: (n: DynamicTreeNode) => boolean, aabb: Collision.AABB): void;
        rayCast(callback: (i: RayCastInput, n: DynamicTreeNode) => number, input: Collision.RayCastInput): void;
    }
    export class DynamicTreeBroadPhase implements IBroadPhase {
        createProxy(aabb: Collision.AABB, userData: any): any;
        destroyProxy(proxy: any): void;
        moveProxy(proxy: any, aabb: Collision.AABB, displacement: Common.Math.Vec2): void;
        testOverlap(proxyA: any, proxyB: any): boolean;
        getUserData(proxy: any): any;
        getFatAABB(proxy: any): Collision.AABB;
        getProxyCount(): number;
        updatePairs(callback: (d1: any, d2: any) => void): void;
        query(callback: (n: DynamicTreeNode) => boolean, aabb: Collision.AABB): void;
        rayCast(callback: (i: RayCastInput, n: DynamicTreeNode) => number, input: Collision.RayCastInput): void;
        validate(): void;
        rebalance(iterations: number): void;
    }
    export class DynamicTreeNode {
        userData: any;
        aabb: Collision.AABB;
        parent: Collision.DynamicTreeNode;
        child1: Collision.DynamicTreeNode;
        child2: Collision.DynamicTreeNode;
        isLeaf(): boolean;
    }
    export class DynamicTreePair {
        proxyA: Collision.DynamicTreeNode;
        proxyB: Collision.DynamicTreeNode;
    }
    export class Manifold {
        m_points: Collision.ManifoldPoint[];
        m_localPlaneNormal: Common.Math.Vec2;
        m_localPoint: Common.Math.Vec2;
        m_type: number;
        m_pointCount: number;
        static CIRCLES: number;
        static FACE_A: number;
        static FACE_B: number;
        constructor();
        reset(): void;
        set(m: Collision.Manifold): void;
        copy(): Collision.Manifold;
    }
    export class ManifoldPoint {
        m_localPoint: Common.Math.Vec2;
        m_normalImpulse: number;
        m_tangentImpulse: number;
        m_id: Collision.ContactID;
        constructor();
        reset(): void;
        set(m: Collision.ManifoldPoint): void;
    }
    export class OBB {
        R: Common.Math.Mat22;
        center: Common.Math.Vec2;
        extents: Common.Math.Vec2;
    }
    export class Pair {
        userData: any;
        proxy1: Collision.Proxy;
        proxy2: Collision.Proxy;
        next: Collision.Pair;
        status: number;
        static NULL_PROXY: number;
        static PAIR_BUFFERED: number;
        static PAIR_REMOVED: number;
        static PAIR_FINAL: number;
        setBuffered(): void;
        clearBuffered(): void;
        isBuffered(): boolean;
        setRemoved(): void;
        clearRemoved(): void;
        isRemoved(): boolean;
        setFinal(): void;
        isFinal(): boolean;
    }
    export class PairManager {
        constructor();
        initialize(broadPhase: Collision.BroadPhase): void;
        addBufferedPair(proxy1: Collision.Proxy, proxy2: Collision.Proxy): void;
        removeBufferedPair(proxy1: Collision.Proxy, proxy2: Collision.Proxy): void;
        commit(callback: (data1: any, data2: any) => void): void;
    }
    export class Point {
        p: Common.Math.Vec2;
        support(xf: Common.Math.Transform, vX: number, vY: number): Common.Math.Vec2;
        getFirstVertex(xf: Common.Math.Transform): Common.Math.Vec2;
    }
    export class Segment {
        p1: Common.Math.Vec2;
        p2: Common.Math.Vec2;
        testSegment(lambda: any[], normal: Common.Math.Vec2, segment: Collision.Segment, maxLambda: number): boolean;
        extend(aabb: Collision.AABB): void;
        extendForward(aabb: Collision.AABB): void;
        extendBackward(aabb: Collision.AABB): void;
    }
    export class SimplexCache {
        metric: number;
        count: number;
        indexA: number[];
        indexB: number[];
    }
    export class TimeOfImpact {
        static timeOfImpact(input: Collision.TOIInput): number;
    }
    export class TOIInput {
        proxyA: Collision.DistanceProxy;
        proxyB: Collision.DistanceProxy;
        sweepA: Common.Math.Sweep;
        sweepB: Common.Math.Sweep;
        tolerance: number;
    }
    export class WorldManifold {
        m_normal: Common.Math.Vec2;
        m_points: Common.Math.Vec2[];
        constructor();
        initialize(manifold: Collision.Manifold, xfA: Common.Math.Transform, radiusA: number, xfB: Common.Math.Transform, radiusB: number): void;
    }
}
export module Collision.Shapes {
    export class MassData {
        mass: number;
        center: Common.Math.Vec2;
        I: number;
    }
    export class EdgeChainDef {
        vertices: any[];
        vertexCount: number;
        isALoop: boolean;
        constructor();
    }
    export class Shape {
        static HIT_COLLIDE: number;
        static MISS_COLLIDE: number;
        static STARTS_INSIDE_COLLIDE: number;
        copy(): Collision.Shapes.Shape;
        set(other: Collision.Shapes.Shape): void;
        getType(): number;
        testPoint(xf: Common.Math.Transform, p: Common.Math.Vec2): boolean;
        rayCast(output: Collision.RayCastOutput, input: Collision.RayCastInput, transform: Common.Math.Transform): boolean;
        computeAABB(aabb: Collision.AABB, xf: Common.Math.Transform): void;
        computeMass(massData: Collision.Shapes.MassData, density: number): void;
        computeSubmergedArea(normal: Common.Math.Vec2, offset: number, xf: Common.Math.Transform, c: Common.Math.Vec2): number;
        static testOverlap(shape1: Collision.Shapes.Shape, transform1: Common.Math.Transform, shape2: Collision.Shapes.Shape, transform2: Common.Math.Transform): boolean;
        constructor();
    }
    export class CircleShape extends Shape {
        copy(): Collision.Shapes.Shape;
        set(other: Collision.Shapes.Shape): void;
        testPoint(transform: Common.Math.Transform, p: Common.Math.Vec2): boolean;
        rayCast(output: Collision.RayCastOutput, input: Collision.RayCastInput, transform: Common.Math.Transform): boolean;
        computeAABB(aabb: Collision.AABB, transform: Common.Math.Transform): void;
        computeMass(massData: Collision.Shapes.MassData, density: number): void;
        computeSubmergedArea(normal: Common.Math.Vec2, offset: number, xf: Common.Math.Transform, c: Common.Math.Vec2): number;
        getLocalPosition(): Common.Math.Vec2;
        setLocalPosition(position: Common.Math.Vec2): void;
        getRadius(): number;
        setRadius(radius: number): void;
        constructor(radius?: number);
    }
    export class EdgeShape extends Shape {
        testPoint(transform: Common.Math.Transform, p: Common.Math.Vec2): boolean;
        rayCast(output: Collision.RayCastOutput, input: Collision.RayCastInput, transform: Common.Math.Transform): boolean;
        computeAABB(aabb: Collision.AABB, transform: Common.Math.Transform): void;
        computeMass(massData: Collision.Shapes.MassData, density: number): void;
        computeSubmergedArea(normal: Common.Math.Vec2, offset: number, xf: Common.Math.Transform, c: Common.Math.Vec2): number;
        getLength(): number;
        getVertex1(): Common.Math.Vec2;
        getVertex2(): Common.Math.Vec2;
        getCoreVertex1(): Common.Math.Vec2;
        getCoreVertex2(): Common.Math.Vec2;
        getNormalVector(): Common.Math.Vec2;
        getDirectionVector(): Common.Math.Vec2;
        getCorner1Vector(): Common.Math.Vec2;
        getCorner2Vector(): Common.Math.Vec2;
        corner1IsConvex(): boolean;
        corner2IsConvex(): boolean;
        getFirstVertex(xf: Common.Math.Transform): Common.Math.Vec2;
        getNextEdge(): Collision.Shapes.EdgeShape;
        getPrevEdge(): Collision.Shapes.EdgeShape;
        support(xf: Common.Math.Transform, dX: number, dY: number): Common.Math.Vec2;
        constructor(v1: Common.Math.Vec2, v2: Common.Math.Vec2);
    }
    export class PolygonShape extends Shape {
        copy(): Collision.Shapes.Shape;
        set(other: Collision.Shapes.Shape): void;
        setAsArray(vertices: any[], vertexCount?: number): void;
        static asArray(vertices: any[], vertexCount: number): Collision.Shapes.PolygonShape;
        setAsVector(vertices: Common.Math.Vec2[], vertexCount?: number): void;
        static asVector(vertices: Common.Math.Vec2[], vertexCount: number): Collision.Shapes.PolygonShape;
        setAsBox(hx: number, hy: number): void;
        static asBox(hx: number, hy: number): Collision.Shapes.PolygonShape;
        setAsOrientedBox(hx: number, hy: number, center?: Common.Math.Vec2, angle?: number): void;
        static asOrientedBox(hx: number, hy: number, center?: Common.Math.Vec2, angle?: number): Collision.Shapes.PolygonShape;
        setAsEdge(v1: Common.Math.Vec2, v2: Common.Math.Vec2): void;
        static asEdge(v1: Common.Math.Vec2, v2: Common.Math.Vec2): Collision.Shapes.PolygonShape;
        testPoint(xf: Common.Math.Transform, p: Common.Math.Vec2): boolean;
        rayCast(output: Collision.RayCastOutput, input: Collision.RayCastInput, transform: Common.Math.Transform): boolean;
        computeAABB(aabb: Collision.AABB, xf: Common.Math.Transform): void;
        computeMass(massData: Collision.Shapes.MassData, density: number): void;
        computeSubmergedArea(normal: Common.Math.Vec2, offset: number, xf: Common.Math.Transform, c: Common.Math.Vec2): number;
        getVertexCount(): number;
        getVertices(): Common.Math.Vec2[];
        getNormals(): Common.Math.Vec2[];
        getSupport(d: Common.Math.Vec2): number;
        getSupportVertex(d: Common.Math.Vec2): Common.Math.Vec2;
        constructor();
        static computeCentroid(vs: Common.Math.Vec2[], count: number): Common.Math.Vec2;
    }
}
export module Dynamics {
    export class Body {
        static STATIC_BODY: number;
        static KINEMATIC_BODY: number;
        static DYNAMIC_BODY: number;
        createFixture(def: Dynamics.FixtureDef): Dynamics.Fixture;
        createFixture2(shape: Collision.Shapes.Shape, density?: number): Dynamics.Fixture;
        destroyFixture(fixture: Dynamics.Fixture): void;
        setPositionAndAngle(position: Common.Math.Vec2, angle: number): void;
        setTransform(xf: Common.Math.Transform): void;
        getTransform(): Common.Math.Transform;
        getPosition(): Common.Math.Vec2;
        setPosition(position: Common.Math.Vec2): void;
        getAngle(): number;
        setAngle(angle: number): void;
        getWorldCenter(): Common.Math.Vec2;
        getLocalCenter(): Common.Math.Vec2;
        setLinearVelocity(v: Common.Math.Vec2): void;
        getLinearVelocity(): Common.Math.Vec2;
        setAngularVelocity(omega: number): void;
        getAngularVelocity(): number;
        getDefinition(): Dynamics.BodyDef;
        applyForce(force: Common.Math.Vec2, point: Common.Math.Vec2): void;
        applyTorque(torque: number): void;
        applyImpulse(impulse: Common.Math.Vec2, point: Common.Math.Vec2): void;
        split(callback: (f: Fixture) => boolean): Dynamics.Body;
        merge(other: Dynamics.Body): void;
        getMass(): number;
        getInertia(): number;
        getMassData(data: Collision.Shapes.MassData): void;
        setMassData(massData: Collision.Shapes.MassData): void;
        resetMassData(): void;
        getWorldPoint(localPoint: Common.Math.Vec2): Common.Math.Vec2;
        getWorldVector(localVector: Common.Math.Vec2): Common.Math.Vec2;
        getLocalPoint(worldPoint: Common.Math.Vec2): Common.Math.Vec2;
        getLocalVector(worldVector: Common.Math.Vec2): Common.Math.Vec2;
        getLinearVelocityFromWorldPoint(worldPoint: Common.Math.Vec2): Common.Math.Vec2;
        getLinearVelocityFromLocalPoint(localPoint: Common.Math.Vec2): Common.Math.Vec2;
        getLinearDamping(): number;
        setLinearDamping(linearDamping: number): void;
        getAngularDamping(): number;
        setAngularDamping(angularDamping: number): void;
        setType(type: number): void;
        getType(): number;
        setBullet(flag: boolean): void;
        isBullet(): boolean;
        setSleepingAllowed(flag: boolean): void;
        setAwake(flag: boolean): void;
        isAwake(): boolean;
        setFixedRotation(fixed: boolean): void;
        isFixedRotation(): boolean;
        setActive(flag: boolean): void;
        isActive(): boolean;
        isSleepingAllowed(): boolean;
        getFixtureList(): Dynamics.Fixture;
        getJointList(): Dynamics.Joints.JointEdge;
        getControllerList(): Dynamics.Controllers.ControllerEdge;
        getContactList(): Dynamics.Contacts.ContactEdge;
        getNext(): Dynamics.Body;
        getUserData(): any;
        setUserData(data: any): void;
        getWorld(): Dynamics.World;
        constructor(bd: Dynamics.BodyDef, world: Dynamics.World);
    }
}
export module Dynamics {
    export class BodyDef {
        type: number;
        position: Common.Math.Vec2;
        angle: number;
        linearVelocity: Common.Math.Vec2;
        angularVelocity: number;
        linearDamping: number;
        angularDamping: number;
        allowSleep: boolean;
        awake: boolean;
        fixedRotation: boolean;
        bullet: boolean;
        active: boolean;
        userData: any;
        inertiaScale: number;
        constructor();
    }
}
export module Dynamics {
    export class ContactFilter {
        shouldCollide(fixtureA: Dynamics.Fixture, fixtureB: Dynamics.Fixture): boolean;
        rayCollide(userData: any, fixture: Dynamics.Fixture): boolean;
    }
}
export module Dynamics {
    export class ContactImpulse {
        normalImpulses: number[];
        tangentImpulses: number[];
    }
}
export module Dynamics {
    export class ContactListener {
        beginContact(contact: Dynamics.Contacts.Contact): void;
        endContact(contact: Dynamics.Contacts.Contact): void;
        preSolve(contact: Dynamics.Contacts.Contact, oldManifold: Collision.Manifold): void;
        postSolve(contact: Dynamics.Contacts.Contact, impulse: Dynamics.ContactImpulse): void;
    }
}
export module Dynamics {
    export class ContactManager {
        constructor();
        addPair(proxyUserDataA: any, proxyUserDataB: any): void;
        findNewContacts(): void;
        destroy(c: Dynamics.Contacts.Contact): void;
        collide(): void;
    }
}
export module Dynamics {
    export class DebugDraw {
        static SHAPE_BIT: number;
        static JOINT_BIT: number;
        static AABB_BIT: number;
        static PAIR_BIT: number;
        static CENTER_OF_MASS_BIT: number;
        static CONTROLLER_BIT: number;
        constructor();
        setFlags(flags: number): void;
        getFlags(): number;
        appendFlags(flags: number): void;
        clearFlags(flags: number): void;
        setSprite(sprite: any): void;
        getSprite(): any;
        setDrawScale(drawScale: number): void;
        getDrawScale(): number;
        setLineThickness(lineThickness: number): void;
        getLineThickness(): number;
        setAlpha(alpha: number): void;
        getAlpha(): number;
        setFillAlpha(alpha: number): void;
        getFillAlpha(): number;
        setXFormScale(xformScale: number): void;
        getXFormScale(): number;
        drawPolygon(vertices: any[], vertexCount: number, color: Common.Color): void;
        drawSolidPolygon(vertices: Common.Math.Vec2[], vertexCount: number, color: Common.Color): void;
        drawCircle(center: Common.Math.Vec2, radius: number, color: Common.Color): void;
        drawSolidCircle(center: Common.Math.Vec2, radius: number, axis: Common.Math.Vec2, color: Common.Color): void;
        drawSegment(p1: Common.Math.Vec2, p2: Common.Math.Vec2, color: Common.Color): void;
        drawTransform(xf: Common.Math.Transform): void;
    }
}
export module Dynamics {
    export class DestructionListener {
        sayGoodbyeJoint(joint: Dynamics.Joints.Joint): void;
        sayGoodbyeFixture(fixture: Dynamics.Fixture): void;
    }
}
export module Dynamics {
    export class FilterData {
        categoryBits: number;
        maskBits: number;
        groupIndex: number;
        copy(): Dynamics.FilterData;
    }
}
export module Dynamics {
    export class Fixture {
        getType(): number;
        getShape(): Collision.Shapes.Shape;
        setSensor(sensor: boolean): void;
        isSensor(): boolean;
        setFilterData(filter: Dynamics.FilterData): void;
        getFilterData(): Dynamics.FilterData;
        getBody(): Dynamics.Body;
        getNext(): Dynamics.Fixture;
        getUserData(): any;
        setUserData(data: any): void;
        testPoint(p: Common.Math.Vec2): boolean;
        rayCast(output: Collision.RayCastOutput, input: Collision.RayCastInput): boolean;
        getMassData(massData?: Collision.Shapes.MassData): Collision.Shapes.MassData;
        setDensity(density: number): void;
        getDensity(): number;
        getFriction(): number;
        setFriction(friction: number): void;
        getRestitution(): number;
        setRestitution(restitution: number): void;
        getAABB(): Collision.AABB;
        constructor();
    }
}
export module Dynamics {
    export class FixtureDef {
        shape: Collision.Shapes.Shape;
        userData: any;
        friction: number;
        restitution: number;
        density: number;
        isSensor: boolean;
        filter: Dynamics.FilterData;
        constructor();
    }
}
export module Dynamics {
    export class Island {
        constructor();
        initialize(bodyCapacity: number, contactCapacity: number, jointCapacity: number, allocator: any, listener: Dynamics.ContactListener, contactSolver: Dynamics.Contacts.ContactSolver): void;
        clear(): void;
        solve(step: Dynamics.TimeStep, gravity: Common.Math.Vec2, allowSleep: boolean): void;
        solveTOI(subStep: Dynamics.TimeStep): void;
        report(constraints: Dynamics.Contacts.ContactConstraint[]): void;
        addBody(body: Dynamics.Body): void;
        addContact(contact: Dynamics.Contacts.Contact): void;
        addJoint(joint: Dynamics.Joints.Joint): void;
    }
}
export module Dynamics {
    export class TimeStep {
        dt: number;
        inv_dt: number;
        dtRatio: number;
        velocityIterations: number;
        positionIterations: number;
        warmStarting: boolean;
        set(step: Dynamics.TimeStep): void;
    }
}
export module Dynamics {
    export class World {
        static NEW_FIXTURE: number;
        static LOCKED: number;
        constructor(gravity: Common.Math.Vec2, doSleep?: boolean);
        setDestructionListener(listener: Dynamics.DestructionListener): void;
        setContactFilter(filter: Dynamics.ContactFilter): void;
        setContactListener(listener: Dynamics.ContactListener): void;
        setDebugDraw(debugDraw: Dynamics.DebugDraw): void;
        setBroadPhase(broadPhase: Collision.IBroadPhase): void;
        validate(): void;
        getProxyCount(): number;
        createBody(def: Dynamics.BodyDef): Dynamics.Body;
        destroyBody(b: Dynamics.Body): void;
        createJoint(def: Dynamics.Joints.JointDef): Dynamics.Joints.Joint;
        destroyJoint(j: Dynamics.Joints.Joint): void;
        addController(c: Dynamics.Controllers.Controller): Dynamics.Controllers.Controller;
        removeController(c: Dynamics.Controllers.Controller): void;
        createController(controller: Dynamics.Controllers.Controller): Dynamics.Controllers.Controller;
        destroyController(controller: Dynamics.Controllers.Controller): void;
        setWarmStarting(flag: boolean): void;
        setContinuousPhysics(flag: boolean): void;
        getBodyCount(): number;
        getJointCount(): number;
        getContactCount(): number;
        setGravity(gravity: Common.Math.Vec2): void;
        getGravity(): Common.Math.Vec2;
        getGroundBody(): Dynamics.Body;
        step(dt: number, velocityIterations: number, positionIterations: number): void;
        clearForces(): void;
        drawDebugData(): void;
        queryAABB(callback: (d: any) => boolean, aabb: Collision.AABB): void;
        queryShape(callback: (f: Fixture) => boolean, shape: Collision.Shapes.Shape, transform?: Common.Math.Transform): void;
        queryPoint(callback: (f: Fixture) => boolean, p: Common.Math.Vec2): void;
        rayCast(callback: (f: Fixture, p: Common.Math.Vec2, n: Common.Math.Vec2, r: number) => number, point1: Common.Math.Vec2, point2: Common.Math.Vec2): void;
        rayCastOne(point1: Common.Math.Vec2, point2: Common.Math.Vec2): Dynamics.Fixture;
        rayCastAll(point1: Common.Math.Vec2, point2: Common.Math.Vec2): Dynamics.Fixture[];
        getBodyList(): Dynamics.Body;
        getJointList(): Dynamics.Joints.Joint;
        getContactList(): Dynamics.Contacts.Contact;
        isLocked(): boolean;
    }
}
export module Dynamics.Contacts {
    export class Contact {
        getManifold(): Collision.Manifold;
        getWorldManifold(worldManifold: Collision.WorldManifold): void;
        isTouching(): boolean;
        isContinuous(): boolean;
        setSensor(sensor: boolean): void;
        isSensor(): boolean;
        setEnabled(flag: boolean): void;
        isEnabled(): boolean;
        getNext(): Dynamics.Contacts.Contact;
        getFixtureA(): Dynamics.Fixture;
        getFixtureB(): Dynamics.Fixture;
        flagForFiltering(): void;
        constructor();
    }
    export class ContactConstraint {
        points: Dynamics.Contacts.ContactConstraintPoint[];
        localPlaneNormal: Common.Math.Vec2;
        localPoint: Common.Math.Vec2;
        normal: Common.Math.Vec2;
        normalMass: Common.Math.Mat22;
        K: Common.Math.Mat22;
        bodyA: Dynamics.Body;
        bodyB: Dynamics.Body;
        type: number;
        radius: number;
        friction: number;
        restitution: number;
        pointCount: number;
        manifold: Collision.Manifold;
        constructor();
    }
    export class ContactConstraintPoint {
        localPoint: Common.Math.Vec2;
        rA: Common.Math.Vec2;
        rB: Common.Math.Vec2;
        normalImpulse: number;
        tangentImpulse: number;
        normalMass: number;
        tangentMass: number;
        equalizedMass: number;
        velocityBias: number;
    }
    export class ContactEdge {
        other: Dynamics.Body;
        contact: Dynamics.Contacts.Contact;
        prev: Dynamics.Contacts.ContactEdge;
        next: Dynamics.Contacts.ContactEdge;
    }
    export class ContactFactory {
        create(fixtureA: Dynamics.Fixture, fixtureB: Dynamics.Fixture): Dynamics.Contacts.Contact;
        destroy(contact: Dynamics.Contacts.Contact): void;
    }
    export class ContactRegister {
        createFcn: () => any;
        destroyFcn: () => any;
        primary: boolean;
        pool: Dynamics.Contacts.Contact;
        poolCount: number;
    }
    export class ContactResult {
        shape1: Collision.Shapes.Shape;
        shape2: Collision.Shapes.Shape;
        position: Common.Math.Vec2;
        normal: Common.Math.Vec2;
        normalImpulse: number;
        tangentImpulse: number;
        id: Collision.ContactID;
    }
    export class ContactSolver {
        constructor();
        initialize(step: Dynamics.TimeStep, contacts: Dynamics.Contacts.Contact[], contactCount: number, allocator: any): void;
        initVelocityConstraints(step: Dynamics.TimeStep): void;
        solveVelocityConstraints(): void;
        finalizeVelocityConstraints(): void;
        solvePositionConstraints(baumgarte: number): boolean;
    }
    export class CircleContact extends Contact {
        static create(allocator: any): Dynamics.Contacts.Contact;
        static destroy(contact: Dynamics.Contacts.Contact, allocator: any): void;
        reset(fixtureA: Dynamics.Fixture, fixtureB: Dynamics.Fixture): void;
    }
    export class EdgeAndCircleContact extends Contact {
        static create(allocator: any): Dynamics.Contacts.Contact;
        static destroy(contact: Dynamics.Contacts.Contact, allocator: any): void;
        reset(fixtureA: Dynamics.Fixture, fixtureB: Dynamics.Fixture): void;
    }
    export class NullContact extends Contact {
        constructor();
    }
    export class PolyAndCircleContact extends Contact {
        static create(allocator: any): Dynamics.Contacts.Contact;
        static destroy(contact: Dynamics.Contacts.Contact, allocator: any): void;
        reset(fixtureA: Dynamics.Fixture, fixtureB: Dynamics.Fixture): void;
    }
    export class PolyAndEdgeContact extends Contact {
        static create(allocator: any): Dynamics.Contacts.Contact;
        static destroy(contact: Dynamics.Contacts.Contact, allocator: any): void;
        reset(fixtureA: Dynamics.Fixture, fixtureB: Dynamics.Fixture): void;
    }
    export class PolygonContact extends Contact {
        static create(allocator: any): Dynamics.Contacts.Contact;
        static destroy(contact: Dynamics.Contacts.Contact, allocator: any): void;
        reset(fixtureA: Dynamics.Fixture, fixtureB: Dynamics.Fixture): void;
    }
}
export module Dynamics.Controllers {
    export class Controller {
        step(step: Dynamics.TimeStep): void;
        draw(debugDraw: Dynamics.DebugDraw): void;
        addBody(body: Dynamics.Body): void;
        removeBody(body: Dynamics.Body): void;
        clear(): void;
        getNext(): Dynamics.Controllers.Controller;
        getWorld(): Dynamics.World;
        getBodyList(): Dynamics.Controllers.ControllerEdge;
    }
    export class BuoyancyController extends Controller {
        normal: Common.Math.Vec2;
        offset: number;
        density: number;
        velocity: Common.Math.Vec2;
        linearDrag: number;
        angularDrag: number;
        useDensity: boolean;
        useWorldGravity: boolean;
        gravity: Common.Math.Vec2;
        step(step: Dynamics.TimeStep): void;
        draw(debugDraw: Dynamics.DebugDraw): void;
    }
    export class ConstantAccelController extends Controller {
        A: Common.Math.Vec2;
        step(step: Dynamics.TimeStep): void;
    }
    export class ConstantForceController extends Controller {
        F: Common.Math.Vec2;
        step(step: Dynamics.TimeStep): void;
    }
    export class ControllerEdge {
        controller: Dynamics.Controllers.Controller;
        body: Dynamics.Body;
        prevBody: Dynamics.Controllers.ControllerEdge;
        nextBody: Dynamics.Controllers.ControllerEdge;
        prevController: Dynamics.Controllers.ControllerEdge;
        nextController: Dynamics.Controllers.ControllerEdge;
    }
    export class GravityController extends Controller {
        G: number;
        invSqr: boolean;
        step(step: Dynamics.TimeStep): void;
    }
    export class TensorDampingController extends Controller {
        T: Common.Math.Mat22;
        maxTimestep: number;
        setAxisAligned(xDamping: number, yDamping: number): void;
        step(step: Dynamics.TimeStep): void;
    }
}
export module Dynamics.Joints {
    export class Jacobian {
        linearA: Common.Math.Vec2;
        angularA: number;
        linearB: Common.Math.Vec2;
        angularB: number;
        setZero(): void;
        set(x1: Common.Math.Vec2, a1: number, x2: Common.Math.Vec2, a2: number): void;
        compute(x1: Common.Math.Vec2, a1: number, x2: Common.Math.Vec2, a2: number): number;
    }
    export class Joint {
        getType(): number;
        getAnchorA(): Common.Math.Vec2;
        getAnchorB(): Common.Math.Vec2;
        getReactionForce(inv_dt: number): Common.Math.Vec2;
        getReactionTorque(inv_dt: number): number;
        getBodyA(): Dynamics.Body;
        getBodyB(): Dynamics.Body;
        getNext(): Dynamics.Joints.Joint;
        getUserData(): any;
        setUserData(data: any): void;
        isActive(): boolean;
        constructor(def: Dynamics.Joints.JointDef);
    }
    export class JointDef {
        type: number;
        userData: any;
        bodyA: Dynamics.Body;
        bodyB: Dynamics.Body;
        collideConnected: boolean;
        constructor();
    }
    export class DistanceJoint extends Joint {
        getAnchorA(): Common.Math.Vec2;
        getAnchorB(): Common.Math.Vec2;
        getReactionForce(inv_dt: number): Common.Math.Vec2;
        getReactionTorque(inv_dt: number): number;
        getLength(): number;
        setLength(length: number): void;
        getFrequency(): number;
        setFrequency(hz: number): void;
        getDampingRatio(): number;
        setDampingRatio(ratio: number): void;
        constructor(def: Dynamics.Joints.DistanceJointDef);
    }
    export class GearJoint extends Joint {
        getAnchorA(): Common.Math.Vec2;
        getAnchorB(): Common.Math.Vec2;
        getReactionForce(inv_dt: number): Common.Math.Vec2;
        getReactionTorque(inv_dt: number): number;
        getRatio(): number;
        setRatio(ratio: number): void;
        constructor(def: Dynamics.Joints.GearJointDef);
    }
    export class FrictionJoint extends Joint {
        m_linearMass: Common.Math.Mat22;
        m_angularMass: number;
        getAnchorA(): Common.Math.Vec2;
        getAnchorB(): Common.Math.Vec2;
        getReactionForce(inv_dt: number): Common.Math.Vec2;
        getReactionTorque(inv_dt: number): number;
        setMaxForce(force: number): void;
        getMaxForce(): number;
        setMaxTorque(torque: number): void;
        getMaxTorque(): number;
        constructor(def: Dynamics.Joints.FrictionJointDef);
    }
    export class GearJointDef extends JointDef {
        joint1: Dynamics.Joints.Joint;
        joint2: Dynamics.Joints.Joint;
        ratio: number;
        constructor();
    }
    export class FrictionJointDef extends JointDef {
        localAnchorA: Common.Math.Vec2;
        localAnchorB: Common.Math.Vec2;
        maxForce: number;
        maxTorque: number;
        constructor();
        initialize(bA: Dynamics.Body, bB: Dynamics.Body, anchor: Common.Math.Vec2): void;
    }

    export class DistanceJointDef extends JointDef {
        localAnchorA: Common.Math.Vec2;
        localAnchorB: Common.Math.Vec2;
        length: number;
        frequencyHz: number;
        dampingRatio: number;
        constructor();
        initialize(bA: Dynamics.Body, bB: Dynamics.Body, anchorA: Common.Math.Vec2, anchorB: Common.Math.Vec2): void;
    }
    export class JointEdge {
        other: Dynamics.Body;
        joint: Dynamics.Joints.Joint;
        prev: Dynamics.Joints.JointEdge;
        next: Dynamics.Joints.JointEdge;
    }
}
export module Dynamics.Joints {
    export class LineJoint extends Joint {
        getAnchorA(): Common.Math.Vec2;
        getAnchorB(): Common.Math.Vec2;
        getReactionForce(inv_dt: number): Common.Math.Vec2;
        getReactionTorque(inv_dt: number): number;
        getJointTranslation(): number;
        getJointSpeed(): number;
        isLimitEnabled(): boolean;
        enableLimit(flag: boolean): void;
        getLowerLimit(): number;
        getUpperLimit(): number;
        setLimits(lower: number, upper: number): void;
        isMotorEnabled(): boolean;
        enableMotor(flag: boolean): void;
        setMotorSpeed(speed: number): void;
        getMotorSpeed(): number;
        setMaxMotorForce(force: number): void;
        getMaxMotorForce(): number;
        getMotorForce(): number;
        constructor(def: Dynamics.Joints.LineJointDef);
    }
}
export module Dynamics.Joints {
    export class LineJointDef extends JointDef {
        localAnchorA: Common.Math.Vec2;
        localAnchorB: Common.Math.Vec2;
        localAxisA: Common.Math.Vec2;
        enableLimit: boolean;
        lowerTranslation: number;
        upperTranslation: number;
        enableMotor: boolean;
        maxMotorForce: number;
        motorSpeed: number;
        constructor();
        initialize(bA: Dynamics.Body, bB: Dynamics.Body, anchor: Common.Math.Vec2, axis: Common.Math.Vec2): void;
    }
}
export module Dynamics.Joints {
    export class MouseJoint extends Joint {
        getAnchorA(): Common.Math.Vec2;
        getAnchorB(): Common.Math.Vec2;
        getReactionForce(inv_dt: number): Common.Math.Vec2;
        getReactionTorque(inv_dt: number): number;
        getTarget(): Common.Math.Vec2;
        setTarget(target: Common.Math.Vec2): void;
        getMaxForce(): number;
        setMaxForce(maxForce: number): void;
        getFrequency(): number;
        setFrequency(hz: number): void;
        getDampingRatio(): number;
        setDampingRatio(ratio: number): void;
        constructor(def: Dynamics.Joints.MouseJointDef);
    }
}
export module Dynamics.Joints {
    export class MouseJointDef extends JointDef {
        target: Common.Math.Vec2;
        maxForce: number;
        frequencyHz: number;
        dampingRatio: number;
        constructor();
    }
}
export module Dynamics.Joints {
    export class PrismaticJoint extends Joint {
        getAnchorA(): Common.Math.Vec2;
        getAnchorB(): Common.Math.Vec2;
        getReactionForce(inv_dt: number): Common.Math.Vec2;
        getReactionTorque(inv_dt: number): number;
        getJointTranslation(): number;
        getJointSpeed(): number;
        isLimitEnabled(): boolean;
        enableLimit(flag: boolean): void;
        getLowerLimit(): number;
        getUpperLimit(): number;
        setLimits(lower: number, upper: number): void;
        isMotorEnabled(): boolean;
        enableMotor(flag: boolean): void;
        setMotorSpeed(speed: number): void;
        getMotorSpeed(): number;
        setMaxMotorForce(force: number): void;
        getMotorForce(): number;
        constructor(def: Dynamics.Joints.PrismaticJointDef);
    }
}
export module Dynamics.Joints {
    export class PrismaticJointDef extends JointDef {
        localAnchorA: Common.Math.Vec2;
        localAnchorB: Common.Math.Vec2;
        localAxisA: Common.Math.Vec2;
        referenceAngle: number;
        enableLimit: boolean;
        lowerTranslation: number;
        upperTranslation: number;
        enableMotor: boolean;
        maxMotorForce: number;
        motorSpeed: number;
        constructor();
        initialize(bA: Dynamics.Body, bB: Dynamics.Body, anchor: Common.Math.Vec2, axis: Common.Math.Vec2): void;
    }
}
export module Dynamics.Joints {
    export class PulleyJoint extends Joint {
        getAnchorA(): Common.Math.Vec2;
        getAnchorB(): Common.Math.Vec2;
        getReactionForce(inv_dt: number): Common.Math.Vec2;
        getReactionTorque(inv_dt: number): number;
        getGroundAnchorA(): Common.Math.Vec2;
        getGroundAnchorB(): Common.Math.Vec2;
        getLength1(): number;
        getLength2(): number;
        getRatio(): number;
        constructor(def: Dynamics.Joints.PulleyJointDef);
    }
}
export module Dynamics.Joints {
    export class PulleyJointDef extends JointDef {
        groundAnchorA: Common.Math.Vec2;
        groundAnchorB: Common.Math.Vec2;
        localAnchorA: Common.Math.Vec2;
        localAnchorB: Common.Math.Vec2;
        lengthA: number;
        maxLengthA: number;
        lengthB: number;
        maxLengthB: number;
        ratio: number;
        constructor();
        initialize(bA: Dynamics.Body, bB: Dynamics.Body, gaA: Common.Math.Vec2, gaB: Common.Math.Vec2, anchorA: Common.Math.Vec2, anchorB: Common.Math.Vec2, r: number): void;
    }
}
export module Dynamics.Joints {
    export class RevoluteJoint extends Joint {
        getAnchorA(): Common.Math.Vec2;
        getAnchorB(): Common.Math.Vec2;
        getReactionForce(inv_dt: number): Common.Math.Vec2;
        getReactionTorque(inv_dt: number): number;
        getJointAngle(): number;
        getJointSpeed(): number;
        isLimitEnabled(): boolean;
        enableLimit(flag: boolean): void;
        getLowerLimit(): number;
        getUpperLimit(): number;
        setLimits(lower: number, upper: number): void;
        isMotorEnabled(): boolean;
        enableMotor(flag: boolean): void;
        setMotorSpeed(speed: number): void;
        getMotorSpeed(): number;
        setMaxMotorTorque(torque: number): void;
        getMotorTorque(): number;
        constructor(def: Dynamics.Joints.RevoluteJointDef);
    }
}
export module Dynamics.Joints {
    export class RevoluteJointDef extends JointDef {
        localAnchorA: Common.Math.Vec2;
        localAnchorB: Common.Math.Vec2;
        referenceAngle: number;
        enableLimit: boolean;
        lowerAngle: number;
        upperAngle: number;
        enableMotor: boolean;
        motorSpeed: number;
        maxMotorTorque: number;
        constructor();
        initialize(bA: Dynamics.Body, bB: Dynamics.Body, anchor: Common.Math.Vec2): void;
    }
}
export module Dynamics.Joints {
    export class WeldJoint extends Joint {
        getAnchorA(): Common.Math.Vec2;
        getAnchorB(): Common.Math.Vec2;
        getReactionForce(inv_dt: number): Common.Math.Vec2;
        getReactionTorque(inv_dt: number): number;
        constructor(def: Dynamics.Joints.WeldJointDef);
    }
}
export module Dynamics.Joints {
    export class WeldJointDef extends JointDef {
        localAnchorA: Common.Math.Vec2;
        localAnchorB: Common.Math.Vec2;
        referenceAngle: number;
        constructor();
        initialize(bA: Dynamics.Body, bB: Dynamics.Body, anchor: Common.Math.Vec2): void;
    }
}
