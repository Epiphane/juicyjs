var Box2D = {};
(function (F, G) {
  function K() {}
  if (
    !(Object.prototype.defineProperty instanceof Function) &&
    Object.prototype.__defineGetter__ instanceof Function &&
    Object.prototype.__definesetter__ instanceof Function
  )
    Object.defineProperty = function (y, w, A) {
      A.get instanceof Function && y.__defineGetter__(w, A.get);
      A.set instanceof Function && y.__definesetter__(w, A.set);
    };
  F.inherit = function (y, w) {
    K.prototype = w.prototype;
    y.prototype = new K();
    y.prototype.constructor = y;
  };
  F.generateCallback = function (y, w) {
    return function () {
      w.apply(y, arguments);
    };
  };
  F.NVector = function (y) {
    if (y === G) y = 0;
    for (var w = Array(y || 0), A = 0; A < y; ++A) w[A] = 0;
    return w;
  };
  F.is = function (y, w) {
    if (y === null) return false;
    if (w instanceof Function && y instanceof w) return true;
    if (y.constructor.__implements != G && y.constructor.__implements[w])
      return true;
    return false;
  };
  F.parseUInt = function (y) {
    return Math.abs(parseInt(y));
  };
})(Box2D);
var Vector = Array,
  Vector_a2j_Number = Box2D.NVector;
if (typeof Box2D === "undefined") Box2D = {};
if (typeof Box2D.Collision === "undefined") Box2D.Collision = {};
if (typeof Box2D.Collision.Shapes === "undefined") Box2D.Collision.Shapes = {};
if (typeof Box2D.Common === "undefined") Box2D.Common = {};
if (typeof Box2D.Common.Math === "undefined") Box2D.Common.Math = {};
if (typeof Box2D.Dynamics === "undefined") Box2D.Dynamics = {};
if (typeof Box2D.Dynamics.Contacts === "undefined")
  Box2D.Dynamics.Contacts = {};
if (typeof Box2D.Dynamics.Controllers === "undefined")
  Box2D.Dynamics.Controllers = {};
if (typeof Box2D.Dynamics.Joints === "undefined") Box2D.Dynamics.Joints = {};
(function () {
  function F() {
    F.AABB.apply(this, arguments);
  }
  function G() {
    G.Bound.apply(this, arguments);
  }
  function K() {
    K.BoundValues.apply(this, arguments);
    this.constructor === K && this.BoundValues.apply(this, arguments);
  }
  function y() {
    y.Collision.apply(this, arguments);
  }
  function w() {
    w.ContactID.apply(this, arguments);
    this.constructor === w && this.ContactID.apply(this, arguments);
  }
  function A() {
    A.ContactPoint.apply(this, arguments);
  }
  function U() {
    U.distance.apply(this, arguments);
  }
  function p() {
    p.distanceInput.apply(this, arguments);
  }
  function B() {
    B.distanceOutput.apply(this, arguments);
  }
  function Q() {
    Q.distanceProxy.apply(this, arguments);
  }
  function V() {
    V.DynamicTree.apply(this, arguments);
    this.constructor === V && this.DynamicTree.apply(this, arguments);
  }
  function M() {
    M.DynamicTreeBroadPhase.apply(this, arguments);
  }
  function L() {
    L.DynamicTreeNode.apply(this, arguments);
  }
  function I() {
    I.DynamicTreePair.apply(this, arguments);
  }
  function W() {
    W.Manifold.apply(this, arguments);
    this.constructor === W && this.Manifold.apply(this, arguments);
  }
  function Y() {
    Y.ManifoldPoint.apply(this, arguments);
    this.constructor === Y && this.ManifoldPoint.apply(this, arguments);
  }
  function k() {
    k.Point.apply(this, arguments);
  }
  function z() {
    z.b2rayCastInput.apply(this, arguments);
    this.constructor === z && this.b2rayCastInput.apply(this, arguments);
  }
  function u() {
    u.b2rayCastOutput.apply(this, arguments);
  }
  function D() {
    D.Segment.apply(this, arguments);
  }
  function H() {
    H.b2SeparationFunction.apply(this, arguments);
  }
  function O() {
    O.b2Simplex.apply(this, arguments);
    this.constructor === O && this.b2Simplex.apply(this, arguments);
  }
  function E() {
    E.SimplexCache.apply(this, arguments);
  }
  function R() {
    R.b2SimplexVertex.apply(this, arguments);
  }
  function N() {
    N.timeOfImpact.apply(this, arguments);
  }
  function S() {
    S.TOIInput.apply(this, arguments);
  }
  function aa() {
    aa.WorldManifold.apply(this, arguments);
    this.constructor === aa && this.WorldManifold.apply(this, arguments);
  }
  function Z() {
    Z.ClipVertex.apply(this, arguments);
  }
  function d() {
    d.Features.apply(this, arguments);
  }
  function h() {
    h.CircleShape.apply(this, arguments);
    this.constructor === h && this.CircleShape.apply(this, arguments);
  }
  function l() {
    l.EdgeChainDef.apply(this, arguments);
    this.constructor === l && this.EdgeChainDef.apply(this, arguments);
  }
  function j() {
    j.EdgeShape.apply(this, arguments);
    this.constructor === j && this.EdgeShape.apply(this, arguments);
  }
  function o() {
    o.MassData.apply(this, arguments);
  }
  function q() {
    q.PolygonShape.apply(this, arguments);
    this.constructor === q && this.PolygonShape.apply(this, arguments);
  }
  function n() {
    n.Shape.apply(this, arguments);
    this.constructor === n && this.Shape.apply(this, arguments);
  }
  function a() {
    a.Color.apply(this, arguments);
    this.constructor === a && this.Color.apply(this, arguments);
  }
  function c() {
    c.b2settings.apply(this, arguments);
  }
  function g() {
    g.Mat22.apply(this, arguments);
    this.constructor === g && this.Mat22.apply(this, arguments);
  }
  function b() {
    b.Mat33.apply(this, arguments);
    this.constructor === b && this.Mat33.apply(this, arguments);
  }
  function e() {
    e.Math.apply(this, arguments);
  }
  function f() {
    f.Sweep.apply(this, arguments);
  }
  function m() {
    m.Transform.apply(this, arguments);
    this.constructor === m && this.Transform.apply(this, arguments);
  }
  function r() {
    r.Vec2.apply(this, arguments);
    this.constructor === r && this.Vec2.apply(this, arguments);
  }
  function s() {
    s.Vec3.apply(this, arguments);
    this.constructor === s && this.Vec3.apply(this, arguments);
  }
  function v() {
    v.Body.apply(this, arguments);
    this.constructor === v && this.Body.apply(this, arguments);
  }
  function t() {
    t.BodyDef.apply(this, arguments);
    this.constructor === t && this.BodyDef.apply(this, arguments);
  }
  function x() {
    x.ContactFilter.apply(this, arguments);
  }
  function C() {
    C.ContactImpulse.apply(this, arguments);
  }
  function J() {
    J.ContactListener.apply(this, arguments);
  }
  function T() {
    T.ContactManager.apply(this, arguments);
    this.constructor === T && this.ContactManager.apply(this, arguments);
  }
  function P() {
    P.DebugDraw.apply(this, arguments);
    this.constructor === P && this.DebugDraw.apply(this, arguments);
  }
  function X() {
    X.DestructionListener.apply(this, arguments);
  }
  function $() {
    $.FilterData.apply(this, arguments);
  }
  function ba() {
    ba.Fixture.apply(this, arguments);
    this.constructor === ba && this.Fixture.apply(this, arguments);
  }
  function ca() {
    ca.FixtureDef.apply(this, arguments);
    this.constructor === ca && this.FixtureDef.apply(this, arguments);
  }
  function da() {
    da.Island.apply(this, arguments);
    this.constructor === da && this.Island.apply(this, arguments);
  }
  function Fa() {
    Fa.Timestep.apply(this, arguments);
  }
  function ea() {
    ea.World.apply(this, arguments);
    this.constructor === ea && this.World.apply(this, arguments);
  }
  function Ga() {
    Ga.CircleContact.apply(this, arguments);
  }
  function fa() {
    fa.Contact.apply(this, arguments);
    this.constructor === fa && this.Contact.apply(this, arguments);
  }
  function ga() {
    ga.ContactConstraint.apply(this, arguments);
    this.constructor === ga && this.ContactConstraint.apply(this, arguments);
  }
  function Ha() {
    Ha.ContactConstraintPoint.apply(this, arguments);
  }
  function Ia() {
    Ia.ContactEdge.apply(this, arguments);
  }
  function ha() {
    ha.ContactFactory.apply(this, arguments);
    this.constructor === ha && this.ContactFactory.apply(this, arguments);
  }
  function Ja() {
    Ja.ContactRegister.apply(this, arguments);
  }
  function Ka() {
    Ka.ContactResult.apply(this, arguments);
  }
  function ia() {
    ia.Contactsolver.apply(this, arguments);
    this.constructor === ia && this.Contactsolver.apply(this, arguments);
  }
  function La() {
    La.EdgeAndCircleContact.apply(this, arguments);
  }
  function ja() {
    ja.NullContact.apply(this, arguments);
    this.constructor === ja && this.NullContact.apply(this, arguments);
  }
  function Ma() {
    Ma.PolyAndCircleContact.apply(this, arguments);
  }
  function Na() {
    Na.PolyAndEdgeContact.apply(this, arguments);
  }
  function Oa() {
    Oa.PolygonContact.apply(this, arguments);
  }
  function ka() {
    ka.b2PositionsolverManifold.apply(this, arguments);
    this.constructor === ka &&
      this.b2PositionsolverManifold.apply(this, arguments);
  }
  function Pa() {
    Pa.BuoyancyController.apply(this, arguments);
  }
  function Qa() {
    Qa.ConstantAccelController.apply(this, arguments);
  }
  function Ra() {
    Ra.ConstantForceController.apply(this, arguments);
  }
  function Sa() {
    Sa.Controller.apply(this, arguments);
  }
  function Ta() {
    Ta.ControllerEdge.apply(this, arguments);
  }
  function Ua() {
    Ua.GravityController.apply(this, arguments);
  }
  function Va() {
    Va.TensorDampingController.apply(this, arguments);
  }
  function la() {
    la.distanceJoint.apply(this, arguments);
    this.constructor === la && this.distanceJoint.apply(this, arguments);
  }
  function ma() {
    ma.distanceJointDef.apply(this, arguments);
    this.constructor === ma && this.distanceJointDef.apply(this, arguments);
  }
  function na() {
    na.FrictionJoint.apply(this, arguments);
    this.constructor === na && this.FrictionJoint.apply(this, arguments);
  }
  function oa() {
    oa.FrictionJointDef.apply(this, arguments);
    this.constructor === oa && this.FrictionJointDef.apply(this, arguments);
  }
  function pa() {
    pa.GearJoint.apply(this, arguments);
    this.constructor === pa && this.GearJoint.apply(this, arguments);
  }
  function qa() {
    qa.GearJointDef.apply(this, arguments);
    this.constructor === qa && this.GearJointDef.apply(this, arguments);
  }
  function Wa() {
    Wa.Jacobian.apply(this, arguments);
  }
  function ra() {
    ra.Joint.apply(this, arguments);
    this.constructor === ra && this.Joint.apply(this, arguments);
  }
  function sa() {
    sa.JointDef.apply(this, arguments);
    this.constructor === sa && this.JointDef.apply(this, arguments);
  }
  function Xa() {
    Xa.JointEdge.apply(this, arguments);
  }
  function ta() {
    ta.LineJoint.apply(this, arguments);
    this.constructor === ta && this.LineJoint.apply(this, arguments);
  }
  function ua() {
    ua.LineJointDef.apply(this, arguments);
    this.constructor === ua && this.LineJointDef.apply(this, arguments);
  }
  function va() {
    va.MouseJoint.apply(this, arguments);
    this.constructor === va && this.MouseJoint.apply(this, arguments);
  }
  function wa() {
    wa.MouseJointDef.apply(this, arguments);
    this.constructor === wa && this.MouseJointDef.apply(this, arguments);
  }
  function xa() {
    xa.PrismaticJoint.apply(this, arguments);
    this.constructor === xa && this.PrismaticJoint.apply(this, arguments);
  }
  function ya() {
    ya.PrismaticJointDef.apply(this, arguments);
    this.constructor === ya && this.PrismaticJointDef.apply(this, arguments);
  }
  function za() {
    za.PulleyJoint.apply(this, arguments);
    this.constructor === za && this.PulleyJoint.apply(this, arguments);
  }
  function Aa() {
    Aa.PulleyJointDef.apply(this, arguments);
    this.constructor === Aa && this.PulleyJointDef.apply(this, arguments);
  }
  function Ba() {
    Ba.RevoluteJoint.apply(this, arguments);
    this.constructor === Ba && this.RevoluteJoint.apply(this, arguments);
  }
  function Ca() {
    Ca.RevoluteJointDef.apply(this, arguments);
    this.constructor === Ca && this.RevoluteJointDef.apply(this, arguments);
  }
  function Da() {
    Da.WeldJoint.apply(this, arguments);
    this.constructor === Da && this.WeldJoint.apply(this, arguments);
  }
  function Ea() {
    Ea.WeldJointDef.apply(this, arguments);
    this.constructor === Ea && this.WeldJointDef.apply(this, arguments);
  }
  Box2D.Collision.IBroadPhase = "Box2D.Collision.IBroadPhase";
  Box2D.Collision.AABB = F;
  Box2D.Collision.Bound = G;
  Box2D.Collision.BoundValues = K;
  Box2D.Collision.Collision = y;
  Box2D.Collision.ContactID = w;
  Box2D.Collision.ContactPoint = A;
  Box2D.Collision.distance = U;
  Box2D.Collision.distanceInput = p;
  Box2D.Collision.distanceOutput = B;
  Box2D.Collision.distanceProxy = Q;
  Box2D.Collision.DynamicTree = V;
  Box2D.Collision.DynamicTreeBroadPhase = M;
  Box2D.Collision.DynamicTreeNode = L;
  Box2D.Collision.DynamicTreePair = I;
  Box2D.Collision.Manifold = W;
  Box2D.Collision.ManifoldPoint = Y;
  Box2D.Collision.Point = k;
  Box2D.Collision.b2rayCastInput = z;
  Box2D.Collision.b2rayCastOutput = u;
  Box2D.Collision.Segment = D;
  Box2D.Collision.b2SeparationFunction = H;
  Box2D.Collision.b2Simplex = O;
  Box2D.Collision.SimplexCache = E;
  Box2D.Collision.b2SimplexVertex = R;
  Box2D.Collision.timeOfImpact = N;
  Box2D.Collision.TOIInput = S;
  Box2D.Collision.WorldManifold = aa;
  Box2D.Collision.ClipVertex = Z;
  Box2D.Collision.Features = d;
  Box2D.Collision.Shapes.CircleShape = h;
  Box2D.Collision.Shapes.EdgeChainDef = l;
  Box2D.Collision.Shapes.EdgeShape = j;
  Box2D.Collision.Shapes.MassData = o;
  Box2D.Collision.Shapes.PolygonShape = q;
  Box2D.Collision.Shapes.Shape = n;
  Box2D.Common.b2internal = "Box2D.Common.b2internal";
  Box2D.Common.Color = a;
  Box2D.Common.b2settings = c;
  Box2D.Common.Math.Mat22 = g;
  Box2D.Common.Math.Mat33 = b;
  Box2D.Common.Math.Math = e;
  Box2D.Common.Math.Sweep = f;
  Box2D.Common.Math.Transform = m;
  Box2D.Common.Math.Vec2 = r;
  Box2D.Common.Math.Vec3 = s;
  Box2D.Dynamics.Body = v;
  Box2D.Dynamics.BodyDef = t;
  Box2D.Dynamics.ContactFilter = x;
  Box2D.Dynamics.ContactImpulse = C;
  Box2D.Dynamics.ContactListener = J;
  Box2D.Dynamics.ContactManager = T;
  Box2D.Dynamics.DebugDraw = P;
  Box2D.Dynamics.DestructionListener = X;
  Box2D.Dynamics.FilterData = $;
  Box2D.Dynamics.Fixture = ba;
  Box2D.Dynamics.FixtureDef = ca;
  Box2D.Dynamics.Island = da;
  Box2D.Dynamics.Timestep = Fa;
  Box2D.Dynamics.World = ea;
  Box2D.Dynamics.Contacts.CircleContact = Ga;
  Box2D.Dynamics.Contacts.Contact = fa;
  Box2D.Dynamics.Contacts.ContactConstraint = ga;
  Box2D.Dynamics.Contacts.ContactConstraintPoint = Ha;
  Box2D.Dynamics.Contacts.ContactEdge = Ia;
  Box2D.Dynamics.Contacts.ContactFactory = ha;
  Box2D.Dynamics.Contacts.ContactRegister = Ja;
  Box2D.Dynamics.Contacts.ContactResult = Ka;
  Box2D.Dynamics.Contacts.Contactsolver = ia;
  Box2D.Dynamics.Contacts.EdgeAndCircleContact = La;
  Box2D.Dynamics.Contacts.NullContact = ja;
  Box2D.Dynamics.Contacts.PolyAndCircleContact = Ma;
  Box2D.Dynamics.Contacts.PolyAndEdgeContact = Na;
  Box2D.Dynamics.Contacts.PolygonContact = Oa;
  Box2D.Dynamics.Contacts.b2PositionsolverManifold = ka;
  Box2D.Dynamics.Controllers.BuoyancyController = Pa;
  Box2D.Dynamics.Controllers.ConstantAccelController = Qa;
  Box2D.Dynamics.Controllers.ConstantForceController = Ra;
  Box2D.Dynamics.Controllers.Controller = Sa;
  Box2D.Dynamics.Controllers.ControllerEdge = Ta;
  Box2D.Dynamics.Controllers.GravityController = Ua;
  Box2D.Dynamics.Controllers.TensorDampingController = Va;
  Box2D.Dynamics.Joints.distanceJoint = la;
  Box2D.Dynamics.Joints.distanceJointDef = ma;
  Box2D.Dynamics.Joints.FrictionJoint = na;
  Box2D.Dynamics.Joints.FrictionJointDef = oa;
  Box2D.Dynamics.Joints.GearJoint = pa;
  Box2D.Dynamics.Joints.GearJointDef = qa;
  Box2D.Dynamics.Joints.Jacobian = Wa;
  Box2D.Dynamics.Joints.Joint = ra;
  Box2D.Dynamics.Joints.JointDef = sa;
  Box2D.Dynamics.Joints.JointEdge = Xa;
  Box2D.Dynamics.Joints.LineJoint = ta;
  Box2D.Dynamics.Joints.LineJointDef = ua;
  Box2D.Dynamics.Joints.MouseJoint = va;
  Box2D.Dynamics.Joints.MouseJointDef = wa;
  Box2D.Dynamics.Joints.PrismaticJoint = xa;
  Box2D.Dynamics.Joints.PrismaticJointDef = ya;
  Box2D.Dynamics.Joints.PulleyJoint = za;
  Box2D.Dynamics.Joints.PulleyJointDef = Aa;
  Box2D.Dynamics.Joints.RevoluteJoint = Ba;
  Box2D.Dynamics.Joints.RevoluteJointDef = Ca;
  Box2D.Dynamics.Joints.WeldJoint = Da;
  Box2D.Dynamics.Joints.WeldJointDef = Ea;
})();
Box2D.postDefs = [];
(function () {
  var F = Box2D.Collision.Shapes.CircleShape,
    G = Box2D.Collision.Shapes.PolygonShape,
    K = Box2D.Collision.Shapes.Shape,
    y = Box2D.Common.b2settings,
    w = Box2D.Common.Math.Math,
    A = Box2D.Common.Math.Sweep,
    U = Box2D.Common.Math.Transform,
    p = Box2D.Common.Math.Vec2,
    B = Box2D.Collision.AABB,
    Q = Box2D.Collision.Bound,
    V = Box2D.Collision.BoundValues,
    M = Box2D.Collision.Collision,
    L = Box2D.Collision.ContactID,
    I = Box2D.Collision.ContactPoint,
    W = Box2D.Collision.distance,
    Y = Box2D.Collision.distanceInput,
    k = Box2D.Collision.distanceOutput,
    z = Box2D.Collision.distanceProxy,
    u = Box2D.Collision.DynamicTree,
    D = Box2D.Collision.DynamicTreeBroadPhase,
    H = Box2D.Collision.DynamicTreeNode,
    O = Box2D.Collision.DynamicTreePair,
    E = Box2D.Collision.Manifold,
    R = Box2D.Collision.ManifoldPoint,
    N = Box2D.Collision.Point,
    S = Box2D.Collision.b2rayCastInput,
    aa = Box2D.Collision.b2rayCastOutput,
    Z = Box2D.Collision.Segment,
    d = Box2D.Collision.b2SeparationFunction,
    h = Box2D.Collision.b2Simplex,
    l = Box2D.Collision.SimplexCache,
    j = Box2D.Collision.b2SimplexVertex,
    o = Box2D.Collision.timeOfImpact,
    q = Box2D.Collision.TOIInput,
    n = Box2D.Collision.WorldManifold,
    a = Box2D.Collision.ClipVertex,
    c = Box2D.Collision.Features,
    g = Box2D.Collision.IBroadPhase;
  B.AABB = function () {
    this.lowerBound = new p();
    this.upperBound = new p();
  };
  B.prototype.isValid = function () {
    var b = this.upperBound.y - this.lowerBound.y;
    return (b =
      (b = this.upperBound.x - this.lowerBound.x >= 0 && b >= 0) &&
      this.lowerBound.isValid() &&
      this.upperBound.isValid());
  };
  B.prototype.getCenter = function () {
    return new p(
      (this.lowerBound.x + this.upperBound.x) / 2,
      (this.lowerBound.y + this.upperBound.y) / 2
    );
  };
  B.prototype.getExtents = function () {
    return new p(
      (this.upperBound.x - this.lowerBound.x) / 2,
      (this.upperBound.y - this.lowerBound.y) / 2
    );
  };
  B.prototype.contains = function (b) {
    var e = true;
    return (e =
      (e =
        (e =
          (e = e && this.lowerBound.x <= b.lowerBound.x) &&
          this.lowerBound.y <= b.lowerBound.y) &&
        b.upperBound.x <= this.upperBound.x) &&
      b.upperBound.y <= this.upperBound.y);
  };
  B.prototype.rayCast = function (b, e) {
    var f = -Number.MAX_VALUE,
      m = Number.MAX_VALUE,
      r = e.p1.x,
      s = e.p1.y,
      v = e.p2.x - e.p1.x,
      t = e.p2.y - e.p1.y,
      x = Math.abs(t),
      C = b.normal,
      J = 0,
      T = 0,
      P = (J = 0);
    P = 0;
    if (Math.abs(v) < Number.MIN_VALUE) {
      if (r < this.lowerBound.x || this.upperBound.x < r) return false;
    } else {
      J = 1 / v;
      T = (this.lowerBound.x - r) * J;
      J = (this.upperBound.x - r) * J;
      P = -1;
      if (T > J) {
        P = T;
        T = J;
        J = P;
        P = 1;
      }
      if (T > f) {
        C.x = P;
        C.y = 0;
        f = T;
      }
      m = Math.min(m, J);
      if (f > m) return false;
    }
    if (x < Number.MIN_VALUE) {
      if (s < this.lowerBound.y || this.upperBound.y < s) return false;
    } else {
      J = 1 / t;
      T = (this.lowerBound.y - s) * J;
      J = (this.upperBound.y - s) * J;
      P = -1;
      if (T > J) {
        P = T;
        T = J;
        J = P;
        P = 1;
      }
      if (T > f) {
        C.y = P;
        C.x = 0;
        f = T;
      }
      m = Math.min(m, J);
      if (f > m) return false;
    }
    b.fraction = f;
    return true;
  };
  B.prototype.testOverlap = function (b) {
    var e = b.lowerBound.y - this.upperBound.y,
      f = this.lowerBound.y - b.upperBound.y;
    if (b.lowerBound.x - this.upperBound.x > 0 || e > 0) return false;
    if (this.lowerBound.x - b.upperBound.x > 0 || f > 0) return false;
    return true;
  };
  B.combine = function (b, e) {
    var f = new B();
    f.combine(b, e);
    return f;
  };
  B.prototype.combine = function (b, e) {
    this.lowerBound.x = Math.min(b.lowerBound.x, e.lowerBound.x);
    this.lowerBound.y = Math.min(b.lowerBound.y, e.lowerBound.y);
    this.upperBound.x = Math.max(b.upperBound.x, e.upperBound.x);
    this.upperBound.y = Math.max(b.upperBound.y, e.upperBound.y);
  };
  Q.Bound = function () {};
  Q.prototype.isLower = function () {
    return (this.value & 1) == 0;
  };
  Q.prototype.isUpper = function () {
    return (this.value & 1) == 1;
  };
  Q.prototype.swap = function (b) {
    var e = this.value,
      f = this.proxy,
      m = this.stabbingCount;
    this.value = b.value;
    this.proxy = b.proxy;
    this.stabbingCount = b.stabbingCount;
    b.value = e;
    b.proxy = f;
    b.stabbingCount = m;
  };
  V.BoundValues = function () {};
  V.prototype.BoundValues = function () {
    this.lowerValues = new Vector_a2j_Number();
    this.lowerValues[0] = 0;
    this.lowerValues[1] = 0;
    this.upperValues = new Vector_a2j_Number();
    this.upperValues[0] = 0;
    this.upperValues[1] = 0;
  };
  M.Collision = function () {};
  M.clipSegmentToLine = function (b, e, f, m) {
    if (m === undefined) m = 0;
    var r,
      s = 0;
    r = e[0];
    var v = r.v;
    r = e[1];
    var t = r.v,
      x = f.x * v.x + f.y * v.y - m;
    r = f.x * t.x + f.y * t.y - m;
    x <= 0 && b[s++].set(e[0]);
    r <= 0 && b[s++].set(e[1]);
    if (x * r < 0) {
      f = x / (x - r);
      r = b[s];
      r = r.v;
      r.x = v.x + f * (t.x - v.x);
      r.y = v.y + f * (t.y - v.y);
      r = b[s];
      r.id = (x > 0 ? e[0] : e[1]).id;
      ++s;
    }
    return s;
  };
  M.edgeSeparation = function (b, e, f, m, r) {
    if (f === undefined) f = 0;
    parseInt(b.m_vertexCount);
    var s = b.m_vertices;
    b = b.m_normals;
    var v = parseInt(m.m_vertexCount),
      t = m.m_vertices,
      x,
      C;
    x = e.R;
    C = b[f];
    b = x.col1.x * C.x + x.col2.x * C.y;
    m = x.col1.y * C.x + x.col2.y * C.y;
    x = r.R;
    var J = x.col1.x * b + x.col1.y * m;
    x = x.col2.x * b + x.col2.y * m;
    for (var T = 0, P = Number.MAX_VALUE, X = 0; X < v; ++X) {
      C = t[X];
      C = C.x * J + C.y * x;
      if (C < P) {
        P = C;
        T = X;
      }
    }
    C = s[f];
    x = e.R;
    f = e.position.x + (x.col1.x * C.x + x.col2.x * C.y);
    e = e.position.y + (x.col1.y * C.x + x.col2.y * C.y);
    C = t[T];
    x = r.R;
    s = r.position.x + (x.col1.x * C.x + x.col2.x * C.y);
    r = r.position.y + (x.col1.y * C.x + x.col2.y * C.y);
    s -= f;
    r -= e;
    return s * b + r * m;
  };
  M.findmaxSeparation = function (b, e, f, m, r) {
    var s = parseInt(e.m_vertexCount),
      v = e.m_normals,
      t,
      x;
    x = r.R;
    t = m.m_centroid;
    var C = r.position.x + (x.col1.x * t.x + x.col2.x * t.y),
      J = r.position.y + (x.col1.y * t.x + x.col2.y * t.y);
    x = f.R;
    t = e.m_centroid;
    C -= f.position.x + (x.col1.x * t.x + x.col2.x * t.y);
    J -= f.position.y + (x.col1.y * t.x + x.col2.y * t.y);
    x = C * f.R.col1.x + J * f.R.col1.y;
    J = C * f.R.col2.x + J * f.R.col2.y;
    C = 0;
    for (var T = -Number.MAX_VALUE, P = 0; P < s; ++P) {
      t = v[P];
      t = t.x * x + t.y * J;
      if (t > T) {
        T = t;
        C = P;
      }
    }
    v = M.edgeSeparation(e, f, C, m, r);
    t = parseInt(C - 1 >= 0 ? C - 1 : s - 1);
    x = M.edgeSeparation(e, f, t, m, r);
    J = parseInt(C + 1 < s ? C + 1 : 0);
    T = M.edgeSeparation(e, f, J, m, r);
    var X = (P = 0),
      $ = 0;
    if (x > v && x > T) {
      $ = -1;
      P = t;
      X = x;
    } else if (T > v) {
      $ = 1;
      P = J;
      X = T;
    } else {
      b[0] = C;
      return v;
    }
    for (;;) {
      C = $ == -1 ? (P - 1 >= 0 ? P - 1 : s - 1) : P + 1 < s ? P + 1 : 0;
      v = M.edgeSeparation(e, f, C, m, r);
      if (v > X) {
        P = C;
        X = v;
      } else break;
    }
    b[0] = P;
    return X;
  };
  M.findIncidentEdge = function (b, e, f, m, r, s) {
    if (m === undefined) m = 0;
    parseInt(e.m_vertexCount);
    var v = e.m_normals,
      t = parseInt(r.m_vertexCount);
    e = r.m_vertices;
    r = r.m_normals;
    var x;
    x = f.R;
    f = v[m];
    v = x.col1.x * f.x + x.col2.x * f.y;
    var C = x.col1.y * f.x + x.col2.y * f.y;
    x = s.R;
    f = x.col1.x * v + x.col1.y * C;
    C = x.col2.x * v + x.col2.y * C;
    v = f;
    x = 0;
    for (var J = Number.MAX_VALUE, T = 0; T < t; ++T) {
      f = r[T];
      f = v * f.x + C * f.y;
      if (f < J) {
        J = f;
        x = T;
      }
    }
    r = parseInt(x);
    v = parseInt(r + 1 < t ? r + 1 : 0);
    t = b[0];
    f = e[r];
    x = s.R;
    t.v.x = s.position.x + (x.col1.x * f.x + x.col2.x * f.y);
    t.v.y = s.position.y + (x.col1.y * f.x + x.col2.y * f.y);
    t.id.features.referenceEdge = m;
    t.id.features.incidentEdge = r;
    t.id.features.incidentVertex = 0;
    t = b[1];
    f = e[v];
    x = s.R;
    t.v.x = s.position.x + (x.col1.x * f.x + x.col2.x * f.y);
    t.v.y = s.position.y + (x.col1.y * f.x + x.col2.y * f.y);
    t.id.features.referenceEdge = m;
    t.id.features.incidentEdge = v;
    t.id.features.incidentVertex = 1;
  };
  M.makeClipPointVector = function () {
    var b = new Vector(2);
    b[0] = new a();
    b[1] = new a();
    return b;
  };
  M.collidePolygons = function (b, e, f, m, r) {
    var s;
    b.m_pointCount = 0;
    var v = e.m_radius + m.m_radius;
    s = 0;
    M.s_edgeAO[0] = s;
    var t = M.findmaxSeparation(M.s_edgeAO, e, f, m, r);
    s = M.s_edgeAO[0];
    if (!(t > v)) {
      var x = 0;
      M.s_edgeBO[0] = x;
      var C = M.findmaxSeparation(M.s_edgeBO, m, r, e, f);
      x = M.s_edgeBO[0];
      if (!(C > v)) {
        var J = 0,
          T = 0;
        if (C > 0.98 * t + 0.001) {
          t = m;
          m = e;
          e = r;
          f = f;
          J = x;
          b.m_type = E.FACE_B;
          T = 1;
        } else {
          t = e;
          m = m;
          e = f;
          f = r;
          J = s;
          b.m_type = E.FACE_A;
          T = 0;
        }
        s = M.s_incidentEdge;
        M.findIncidentEdge(s, t, e, J, m, f);
        x = parseInt(t.m_vertexCount);
        r = t.m_vertices;
        t = r[J];
        var P;
        P = J + 1 < x ? r[parseInt(J + 1)] : r[0];
        J = M.s_localTangent;
        J.set(P.x - t.x, P.y - t.y);
        J.normalize();
        r = M.s_localNormal;
        r.x = J.y;
        r.y = -J.x;
        m = M.s_planePoint;
        m.set(0.5 * (t.x + P.x), 0.5 * (t.y + P.y));
        C = M.s_tangent;
        x = e.R;
        C.x = x.col1.x * J.x + x.col2.x * J.y;
        C.y = x.col1.y * J.x + x.col2.y * J.y;
        var X = M.s_tangent2;
        X.x = -C.x;
        X.y = -C.y;
        J = M.s_normal;
        J.x = C.y;
        J.y = -C.x;
        var $ = M.s_v11,
          ba = M.s_v12;
        $.x = e.position.x + (x.col1.x * t.x + x.col2.x * t.y);
        $.y = e.position.y + (x.col1.y * t.x + x.col2.y * t.y);
        ba.x = e.position.x + (x.col1.x * P.x + x.col2.x * P.y);
        ba.y = e.position.y + (x.col1.y * P.x + x.col2.y * P.y);
        e = J.x * $.x + J.y * $.y;
        x = C.x * ba.x + C.y * ba.y + v;
        P = M.s_clipPoints1;
        t = M.s_clipPoints2;
        ba = 0;
        ba = M.clipSegmentToLine(P, s, X, -C.x * $.x - C.y * $.y + v);
        if (!(ba < 2)) {
          ba = M.clipSegmentToLine(t, P, C, x);
          if (!(ba < 2)) {
            b.m_localPlaneNormal.setV(r);
            b.m_localPoint.setV(m);
            for (m = r = 0; m < y.MAX_MANIFOLD_POINTS; ++m) {
              s = t[m];
              if (J.x * s.v.x + J.y * s.v.y - e <= v) {
                C = b.m_points[r];
                x = f.R;
                X = s.v.x - f.position.x;
                $ = s.v.y - f.position.y;
                C.m_localPoint.x = X * x.col1.x + $ * x.col1.y;
                C.m_localPoint.y = X * x.col2.x + $ * x.col2.y;
                C.m_id.set(s.id);
                C.m_id.features.flip = T;
                ++r;
              }
            }
            b.m_pointCount = r;
          }
        }
      }
    }
  };
  M.collideCircles = function (b, e, f, m, r) {
    b.m_pointCount = 0;
    var s, v;
    s = f.R;
    v = e.m_p;
    var t = f.position.x + (s.col1.x * v.x + s.col2.x * v.y);
    f = f.position.y + (s.col1.y * v.x + s.col2.y * v.y);
    s = r.R;
    v = m.m_p;
    t = r.position.x + (s.col1.x * v.x + s.col2.x * v.y) - t;
    r = r.position.y + (s.col1.y * v.x + s.col2.y * v.y) - f;
    s = e.m_radius + m.m_radius;
    if (!(t * t + r * r > s * s)) {
      b.m_type = E.CIRCLES;
      b.m_localPoint.setV(e.m_p);
      b.m_localPlaneNormal.setZero();
      b.m_pointCount = 1;
      b.m_points[0].m_localPoint.setV(m.m_p);
      b.m_points[0].m_id.key = 0;
    }
  };
  M.collidePolygonAndCircle = function (b, e, f, m, r) {
    var s = (b.m_pointCount = 0),
      v = 0,
      t,
      x;
    x = r.R;
    t = m.m_p;
    var C = r.position.y + (x.col1.y * t.x + x.col2.y * t.y);
    s = r.position.x + (x.col1.x * t.x + x.col2.x * t.y) - f.position.x;
    v = C - f.position.y;
    x = f.R;
    f = s * x.col1.x + v * x.col1.y;
    x = s * x.col2.x + v * x.col2.y;
    var J = 0;
    C = -Number.MAX_VALUE;
    r = e.m_radius + m.m_radius;
    var T = parseInt(e.m_vertexCount),
      P = e.m_vertices;
    e = e.m_normals;
    for (var X = 0; X < T; ++X) {
      t = P[X];
      s = f - t.x;
      v = x - t.y;
      t = e[X];
      s = t.x * s + t.y * v;
      if (s > r) return;
      if (s > C) {
        C = s;
        J = X;
      }
    }
    s = parseInt(J);
    v = parseInt(s + 1 < T ? s + 1 : 0);
    t = P[s];
    P = P[v];
    if (C < Number.MIN_VALUE) {
      b.m_pointCount = 1;
      b.m_type = E.FACE_A;
      b.m_localPlaneNormal.setV(e[J]);
      b.m_localPoint.x = 0.5 * (t.x + P.x);
      b.m_localPoint.y = 0.5 * (t.y + P.y);
    } else {
      C = (f - P.x) * (t.x - P.x) + (x - P.y) * (t.y - P.y);
      if ((f - t.x) * (P.x - t.x) + (x - t.y) * (P.y - t.y) <= 0) {
        if ((f - t.x) * (f - t.x) + (x - t.y) * (x - t.y) > r * r) return;
        b.m_pointCount = 1;
        b.m_type = E.FACE_A;
        b.m_localPlaneNormal.x = f - t.x;
        b.m_localPlaneNormal.y = x - t.y;
        b.m_localPlaneNormal.normalize();
        b.m_localPoint.setV(t);
      } else if (C <= 0) {
        if ((f - P.x) * (f - P.x) + (x - P.y) * (x - P.y) > r * r) return;
        b.m_pointCount = 1;
        b.m_type = E.FACE_A;
        b.m_localPlaneNormal.x = f - P.x;
        b.m_localPlaneNormal.y = x - P.y;
        b.m_localPlaneNormal.normalize();
        b.m_localPoint.setV(P);
      } else {
        J = 0.5 * (t.x + P.x);
        t = 0.5 * (t.y + P.y);
        C = (f - J) * e[s].x + (x - t) * e[s].y;
        if (C > r) return;
        b.m_pointCount = 1;
        b.m_type = E.FACE_A;
        b.m_localPlaneNormal.x = e[s].x;
        b.m_localPlaneNormal.y = e[s].y;
        b.m_localPlaneNormal.normalize();
        b.m_localPoint.set(J, t);
      }
    }
    b.m_points[0].m_localPoint.setV(m.m_p);
    b.m_points[0].m_id.key = 0;
  };
  M.testOverlap = function (b, e) {
    var f = e.lowerBound,
      m = b.upperBound,
      r = f.x - m.x,
      s = f.y - m.y;
    f = b.lowerBound;
    m = e.upperBound;
    var v = f.y - m.y;
    if (r > 0 || s > 0) return false;
    if (f.x - m.x > 0 || v > 0) return false;
    return true;
  };
  Box2D.postDefs.push(function () {
    Box2D.Collision.Collision.s_incidentEdge = M.makeClipPointVector();
    Box2D.Collision.Collision.s_clipPoints1 = M.makeClipPointVector();
    Box2D.Collision.Collision.s_clipPoints2 = M.makeClipPointVector();
    Box2D.Collision.Collision.s_edgeAO = new Vector_a2j_Number(1);
    Box2D.Collision.Collision.s_edgeBO = new Vector_a2j_Number(1);
    Box2D.Collision.Collision.s_localTangent = new p();
    Box2D.Collision.Collision.s_localNormal = new p();
    Box2D.Collision.Collision.s_planePoint = new p();
    Box2D.Collision.Collision.s_normal = new p();
    Box2D.Collision.Collision.s_tangent = new p();
    Box2D.Collision.Collision.s_tangent2 = new p();
    Box2D.Collision.Collision.s_v11 = new p();
    Box2D.Collision.Collision.s_v12 = new p();
    Box2D.Collision.Collision.b2collidePolyTempVec = new p();
    Box2D.Collision.Collision.NULL_FEATURE = 255;
  });
  L.ContactID = function () {
    this.features = new c();
  };
  L.prototype.ContactID = function () {
    this.features._m_id = this;
  };
  L.prototype.set = function (b) {
    this.key = b._key;
  };
  L.prototype.copy = function () {
    var b = new L();
    b.key = this.key;
    return b;
  };
  Object.defineProperty(L.prototype, "key", {
    enumerable: false,
    configurable: true,
    get: function () {
      return this._key;
    },
  });
  Object.defineProperty(L.prototype, "key", {
    enumerable: false,
    configurable: true,
    set: function (b) {
      if (b === undefined) b = 0;
      this._key = b;
      this.features._referenceEdge = this._key & 255;
      this.features._incidentEdge = ((this._key & 65280) >> 8) & 255;
      this.features._incidentVertex = ((this._key & 16711680) >> 16) & 255;
      this.features._flip = ((this._key & 4278190080) >> 24) & 255;
    },
  });
  I.ContactPoint = function () {
    this.position = new p();
    this.velocity = new p();
    this.normal = new p();
    this.id = new L();
  };
  W.distance = function () {};
  W.distance = function (b, e, f) {
    ++W.b2_gjkCalls;
    var m = f.proxyA,
      r = f.proxyB,
      s = f.transformA,
      v = f.transformB,
      t = W.s_simplex;
    t.ReadCache(e, m, s, r, v);
    var x = t.m_vertices,
      C = W.s_saveA,
      J = W.s_saveB,
      T = 0;
    t.GetClosestPoint().lengthSquared();
    for (var P = 0, X, $ = 0; $ < 20; ) {
      T = t.m_count;
      for (P = 0; P < T; P++) {
        C[P] = x[P].indexA;
        J[P] = x[P].indexB;
      }
      switch (t.m_count) {
        case 1:
          break;
        case 2:
          t.solve2();
          break;
        case 3:
          t.solve3();
          break;
        default:
          y.assert(false);
      }
      if (t.m_count == 3) break;
      X = t.GetClosestPoint();
      X.lengthSquared();
      P = t.GetSearchDirection();
      if (P.lengthSquared() < Number.MIN_VALUE * Number.MIN_VALUE) break;
      X = x[t.m_count];
      X.indexA = m.getsupport(w.mulTMV(s.R, P.getNegative()));
      X.wA = w.mulX(s, m.getVertex(X.indexA));
      X.indexB = r.getsupport(w.mulTMV(v.R, P));
      X.wB = w.mulX(v, r.getVertex(X.indexB));
      X.w = w.subtractVV(X.wB, X.wA);
      ++$;
      ++W.b2_gjkIters;
      var ba = false;
      for (P = 0; P < T; P++)
        if (X.indexA == C[P] && X.indexB == J[P]) {
          ba = true;
          break;
        }
      if (ba) break;
      ++t.m_count;
    }
    W.b2_gjkmaxIters = w.max(W.b2_gjkmaxIters, $);
    t.GetWitnessPoints(b.pointA, b.pointB);
    b.distance = w.subtractVV(b.pointA, b.pointB).length();
    b.iterations = $;
    t.WriteCache(e);
    if (f.useRadii) {
      e = m.m_radius;
      r = r.m_radius;
      if (b.distance > e + r && b.distance > Number.MIN_VALUE) {
        b.distance -= e + r;
        f = w.subtractVV(b.pointB, b.pointA);
        f.normalize();
        b.pointA.x += e * f.x;
        b.pointA.y += e * f.y;
        b.pointB.x -= r * f.x;
        b.pointB.y -= r * f.y;
      } else {
        X = new p();
        X.x = 0.5 * (b.pointA.x + b.pointB.x);
        X.y = 0.5 * (b.pointA.y + b.pointB.y);
        b.pointA.x = b.pointB.x = X.x;
        b.pointA.y = b.pointB.y = X.y;
        b.distance = 0;
      }
    }
  };
  Box2D.postDefs.push(function () {
    Box2D.Collision.distance.s_simplex = new h();
    Box2D.Collision.distance.s_saveA = new Vector_a2j_Number(3);
    Box2D.Collision.distance.s_saveB = new Vector_a2j_Number(3);
  });
  Y.distanceInput = function () {};
  k.distanceOutput = function () {
    this.pointA = new p();
    this.pointB = new p();
  };
  z.distanceProxy = function () {};
  z.prototype.set = function (b) {
    switch (b.getType()) {
      case K.e_circleShape:
        b = b instanceof F ? b : null;
        this.m_vertices = new Vector(1, true);
        this.m_vertices[0] = b.m_p;
        this.m_count = 1;
        this.m_radius = b.m_radius;
        break;
      case K.e_polygonShape:
        b = b instanceof G ? b : null;
        this.m_vertices = b.m_vertices;
        this.m_count = b.m_vertexCount;
        this.m_radius = b.m_radius;
        break;
      default:
        y.assert(false);
    }
  };
  z.prototype.getsupport = function (b) {
    for (
      var e = 0,
        f = this.m_vertices[0].x * b.x + this.m_vertices[0].y * b.y,
        m = 1;
      m < this.m_count;
      ++m
    ) {
      var r = this.m_vertices[m].x * b.x + this.m_vertices[m].y * b.y;
      if (r > f) {
        e = m;
        f = r;
      }
    }
    return e;
  };
  z.prototype.getsupportVertex = function (b) {
    for (
      var e = 0,
        f = this.m_vertices[0].x * b.x + this.m_vertices[0].y * b.y,
        m = 1;
      m < this.m_count;
      ++m
    ) {
      var r = this.m_vertices[m].x * b.x + this.m_vertices[m].y * b.y;
      if (r > f) {
        e = m;
        f = r;
      }
    }
    return this.m_vertices[e];
  };
  z.prototype.getVertexCount = function () {
    return this.m_count;
  };
  z.prototype.getVertex = function (b) {
    if (b === undefined) b = 0;
    y.assert(0 <= b && b < this.m_count);
    return this.m_vertices[b];
  };
  u.DynamicTree = function () {};
  u.prototype.DynamicTree = function () {
    this.m_freeList = this.m_root = null;
    this.m_insertionCount = this.m_path = 0;
  };
  u.prototype.createProxy = function (b, e) {
    var f = this.AllocateNode(),
      m = y.AABB_EXTENSION,
      r = y.AABB_EXTENSION;
    f.aabb.lowerBound.x = b.lowerBound.x - m;
    f.aabb.lowerBound.y = b.lowerBound.y - r;
    f.aabb.upperBound.x = b.upperBound.x + m;
    f.aabb.upperBound.y = b.upperBound.y + r;
    f.userData = e;
    this.InsertLeaf(f);
    return f;
  };
  u.prototype.destroyProxy = function (b) {
    this.RemoveLeaf(b);
    this.FreeNode(b);
  };
  u.prototype.moveProxy = function (b, e, f) {
    y.assert(b.isLeaf());
    if (b.aabb.contains(e)) return false;
    this.RemoveLeaf(b);
    var m = y.AABB_EXTENSION + y.AABB_MULTIPLIER * (f.x > 0 ? f.x : -f.x);
    f = y.AABB_EXTENSION + y.AABB_MULTIPLIER * (f.y > 0 ? f.y : -f.y);
    b.aabb.lowerBound.x = e.lowerBound.x - m;
    b.aabb.lowerBound.y = e.lowerBound.y - f;
    b.aabb.upperBound.x = e.upperBound.x + m;
    b.aabb.upperBound.y = e.upperBound.y + f;
    this.InsertLeaf(b);
    return true;
  };
  u.prototype.rebalance = function (b) {
    if (b === undefined) b = 0;
    if (this.m_root != null)
      for (var e = 0; e < b; e++) {
        for (var f = this.m_root, m = 0; f.isLeaf() == false; ) {
          f = (this.m_path >> m) & 1 ? f.child2 : f.child1;
          m = (m + 1) & 31;
        }
        ++this.m_path;
        this.RemoveLeaf(f);
        this.InsertLeaf(f);
      }
  };
  u.prototype.getFatAABB = function (b) {
    return b.aabb;
  };
  u.prototype.getUserData = function (b) {
    return b.userData;
  };
  u.prototype.query = function (b, e) {
    if (this.m_root != null) {
      var f = new Vector(),
        m = 0;
      for (f[m++] = this.m_root; m > 0; ) {
        var r = f[--m];
        if (r.aabb.testOverlap(e))
          if (r.isLeaf()) {
            if (!b(r)) break;
          } else {
            f[m++] = r.child1;
            f[m++] = r.child2;
          }
      }
    }
  };
  u.prototype.rayCast = function (b, e) {
    if (this.m_root != null) {
      var f = e.p1,
        m = e.p2,
        r = w.subtractVV(f, m);
      r.normalize();
      r = w.crossFV(1, r);
      var s = w.absV(r),
        v = e.maxFraction,
        t = new B(),
        x = 0,
        C = 0;
      x = f.x + v * (m.x - f.x);
      C = f.y + v * (m.y - f.y);
      t.lowerBound.x = Math.min(f.x, x);
      t.lowerBound.y = Math.min(f.y, C);
      t.upperBound.x = Math.max(f.x, x);
      t.upperBound.y = Math.max(f.y, C);
      var J = new Vector(),
        T = 0;
      for (J[T++] = this.m_root; T > 0; ) {
        v = J[--T];
        if (v.aabb.testOverlap(t) != false) {
          x = v.aabb.getCenter();
          C = v.aabb.getExtents();
          if (
            !(
              Math.abs(r.x * (f.x - x.x) + r.y * (f.y - x.y)) -
                s.x * C.x -
                s.y * C.y >
              0
            )
          )
            if (v.isLeaf()) {
              x = new S();
              x.p1 = e.p1;
              x.p2 = e.p2;
              x.maxFraction = e.maxFraction;
              v = b(x, v);
              if (v == 0) break;
              if (v > 0) {
                x = f.x + v * (m.x - f.x);
                C = f.y + v * (m.y - f.y);
                t.lowerBound.x = Math.min(f.x, x);
                t.lowerBound.y = Math.min(f.y, C);
                t.upperBound.x = Math.max(f.x, x);
                t.upperBound.y = Math.max(f.y, C);
              }
            } else {
              J[T++] = v.child1;
              J[T++] = v.child2;
            }
        }
      }
    }
  };
  u.prototype.AllocateNode = function () {
    if (this.m_freeList) {
      var b = this.m_freeList;
      this.m_freeList = b.parent;
      b.parent = null;
      b.child1 = null;
      b.child2 = null;
      return b;
    }
    return new H();
  };
  u.prototype.FreeNode = function (b) {
    b.parent = this.m_freeList;
    this.m_freeList = b;
  };
  u.prototype.InsertLeaf = function (b) {
    ++this.m_insertionCount;
    if (this.m_root == null) {
      this.m_root = b;
      this.m_root.parent = null;
    } else {
      var e = b.aabb.getCenter(),
        f = this.m_root;
      if (f.isLeaf() == false) {
        do {
          var m = f.child1;
          f = f.child2;
          f =
            Math.abs((m.aabb.lowerBound.x + m.aabb.upperBound.x) / 2 - e.x) +
              Math.abs((m.aabb.lowerBound.y + m.aabb.upperBound.y) / 2 - e.y) <
            Math.abs((f.aabb.lowerBound.x + f.aabb.upperBound.x) / 2 - e.x) +
              Math.abs((f.aabb.lowerBound.y + f.aabb.upperBound.y) / 2 - e.y)
              ? m
              : f;
        } while (f.isLeaf() == false);
      }
      e = f.parent;
      m = this.AllocateNode();
      m.parent = e;
      m.userData = null;
      m.aabb.combine(b.aabb, f.aabb);
      if (e) {
        if (f.parent.child1 == f) e.child1 = m;
        else e.child2 = m;
        m.child1 = f;
        m.child2 = b;
        f.parent = m;
        b.parent = m;
        do {
          if (e.aabb.contains(m.aabb)) break;
          e.aabb.combine(e.child1.aabb, e.child2.aabb);
          m = e;
          e = e.parent;
        } while (e);
      } else {
        m.child1 = f;
        m.child2 = b;
        f.parent = m;
        this.m_root = b.parent = m;
      }
    }
  };
  u.prototype.RemoveLeaf = function (b) {
    if (b == this.m_root) this.m_root = null;
    else {
      var e = b.parent,
        f = e.parent;
      b = e.child1 == b ? e.child2 : e.child1;
      if (f) {
        if (f.child1 == e) f.child1 = b;
        else f.child2 = b;
        b.parent = f;
        for (this.FreeNode(e); f; ) {
          e = f.aabb;
          f.aabb = B.combine(f.child1.aabb, f.child2.aabb);
          if (e.contains(f.aabb)) break;
          f = f.parent;
        }
      } else {
        this.m_root = b;
        b.parent = null;
        this.FreeNode(e);
      }
    }
  };
  D.DynamicTreeBroadPhase = function () {
    this.m_tree = new u();
    this.m_moveBuffer = new Vector();
    this.m_pairBuffer = new Vector();
    this.m_pairCount = 0;
  };
  D.prototype.createProxy = function (b, e) {
    var f = this.m_tree.createProxy(b, e);
    ++this.m_proxyCount;
    this.BufferMove(f);
    return f;
  };
  D.prototype.destroyProxy = function (b) {
    this.UnBufferMove(b);
    --this.m_proxyCount;
    this.m_tree.destroyProxy(b);
  };
  D.prototype.moveProxy = function (b, e, f) {
    this.m_tree.moveProxy(b, e, f) && this.BufferMove(b);
  };
  D.prototype.testOverlap = function (b, e) {
    var f = this.m_tree.getFatAABB(b),
      m = this.m_tree.getFatAABB(e);
    return f.testOverlap(m);
  };
  D.prototype.getUserData = function (b) {
    return this.m_tree.getUserData(b);
  };
  D.prototype.getFatAABB = function (b) {
    return this.m_tree.getFatAABB(b);
  };
  D.prototype.getProxyCount = function () {
    return this.m_proxyCount;
  };
  D.prototype.updatePairs = function (b) {
    var e = this;
    var f = (e.m_pairCount = 0),
      m;
    for (f = 0; f < e.m_moveBuffer.length; ++f) {
      m = e.m_moveBuffer[f];
      var r = e.m_tree.getFatAABB(m);
      e.m_tree.query(function (t) {
        if (t == m) return true;
        if (e.m_pairCount == e.m_pairBuffer.length)
          e.m_pairBuffer[e.m_pairCount] = new O();
        var x = e.m_pairBuffer[e.m_pairCount];
        x.proxyA = t < m ? t : m;
        x.proxyB = t >= m ? t : m;
        ++e.m_pairCount;
        return true;
      }, r);
    }
    for (f = e.m_moveBuffer.length = 0; f < e.m_pairCount; ) {
      r = e.m_pairBuffer[f];
      var s = e.m_tree.getUserData(r.proxyA),
        v = e.m_tree.getUserData(r.proxyB);
      b(s, v);
      for (++f; f < e.m_pairCount; ) {
        s = e.m_pairBuffer[f];
        if (s.proxyA != r.proxyA || s.proxyB != r.proxyB) break;
        ++f;
      }
    }
  };
  D.prototype.query = function (b, e) {
    this.m_tree.query(b, e);
  };
  D.prototype.rayCast = function (b, e) {
    this.m_tree.rayCast(b, e);
  };
  D.prototype.validate = function () {};
  D.prototype.rebalance = function (b) {
    if (b === undefined) b = 0;
    this.m_tree.rebalance(b);
  };
  D.prototype.BufferMove = function (b) {
    this.m_moveBuffer[this.m_moveBuffer.length] = b;
  };
  D.prototype.UnBufferMove = function (b) {
    this.m_moveBuffer.splice(parseInt(this.m_moveBuffer.indexOf(b)), 1);
  };
  D.prototype.ComparePairs = function () {
    return 0;
  };
  D.__implements = {};
  D.__implements[g] = true;
  H.DynamicTreeNode = function () {
    this.aabb = new B();
  };
  H.prototype.isLeaf = function () {
    return this.child1 == null;
  };
  O.DynamicTreePair = function () {};
  E.Manifold = function () {
    this.m_pointCount = 0;
  };
  E.prototype.Manifold = function () {
    this.m_points = new Vector(y.MAX_MANIFOLD_POINTS);
    for (var b = 0; b < y.MAX_MANIFOLD_POINTS; b++) this.m_points[b] = new R();
    this.m_localPlaneNormal = new p();
    this.m_localPoint = new p();
  };
  E.prototype.reset = function () {
    for (var b = 0; b < y.MAX_MANIFOLD_POINTS; b++)
      (this.m_points[b] instanceof R ? this.m_points[b] : null).reset();
    this.m_localPlaneNormal.setZero();
    this.m_localPoint.setZero();
    this.m_pointCount = this.m_type = 0;
  };
  E.prototype.set = function (b) {
    this.m_pointCount = b.m_pointCount;
    for (var e = 0; e < y.MAX_MANIFOLD_POINTS; e++)
      (this.m_points[e] instanceof R ? this.m_points[e] : null).set(
        b.m_points[e]
      );
    this.m_localPlaneNormal.setV(b.m_localPlaneNormal);
    this.m_localPoint.setV(b.m_localPoint);
    this.m_type = b.m_type;
  };
  E.prototype.copy = function () {
    var b = new E();
    b.set(this);
    return b;
  };
  Box2D.postDefs.push(function () {
    Box2D.Collision.Manifold.CIRCLES = 1;
    Box2D.Collision.Manifold.FACE_A = 2;
    Box2D.Collision.Manifold.FACE_B = 4;
  });
  R.ManifoldPoint = function () {
    this.m_localPoint = new p();
    this.m_id = new L();
  };
  R.prototype.ManifoldPoint = function () {
    this.reset();
  };
  R.prototype.reset = function () {
    this.m_localPoint.setZero();
    this.m_tangentImpulse = this.m_normalImpulse = 0;
    this.m_id.key = 0;
  };
  R.prototype.set = function (b) {
    this.m_localPoint.setV(b.m_localPoint);
    this.m_normalImpulse = b.m_normalImpulse;
    this.m_tangentImpulse = b.m_tangentImpulse;
    this.m_id.set(b.m_id);
  };
  N.Point = function () {
    this.p = new p();
  };
  N.prototype.support = function () {
    return this.p;
  };
  N.prototype.getFirstVertex = function () {
    return this.p;
  };
  S.b2rayCastInput = function () {
    this.p1 = new p();
    this.p2 = new p();
  };
  S.prototype.b2rayCastInput = function (b, e, f) {
    if (b === undefined) b = null;
    if (e === undefined) e = null;
    if (f === undefined) f = 1;
    b && this.p1.setV(b);
    e && this.p2.setV(e);
    this.maxFraction = f;
  };
  aa.b2rayCastOutput = function () {
    this.normal = new p();
  };
  Z.Segment = function () {
    this.p1 = new p();
    this.p2 = new p();
  };
  Z.prototype.testSegment = function (b, e, f, m) {
    if (m === undefined) m = 0;
    var r = f.p1,
      s = f.p2.x - r.x,
      v = f.p2.y - r.y;
    f = this.p2.y - this.p1.y;
    var t = -(this.p2.x - this.p1.x),
      x = 100 * Number.MIN_VALUE,
      C = -(s * f + v * t);
    if (C > x) {
      var J = r.x - this.p1.x,
        T = r.y - this.p1.y;
      r = J * f + T * t;
      if (0 <= r && r <= m * C) {
        m = -s * T + v * J;
        if (-x * C <= m && m <= C * (1 + x)) {
          r /= C;
          m = Math.sqrt(f * f + t * t);
          f /= m;
          t /= m;
          b[0] = r;
          e.set(f, t);
          return true;
        }
      }
    }
    return false;
  };
  Z.prototype.extend = function (b) {
    this.extendForward(b);
    this.extendBackward(b);
  };
  Z.prototype.extendForward = function (b) {
    var e = this.p2.x - this.p1.x,
      f = this.p2.y - this.p1.y;
    b = Math.min(
      e > 0
        ? (b.upperBound.x - this.p1.x) / e
        : e < 0
        ? (b.lowerBound.x - this.p1.x) / e
        : Number.POSITIVE_INFINITY,
      f > 0
        ? (b.upperBound.y - this.p1.y) / f
        : f < 0
        ? (b.lowerBound.y - this.p1.y) / f
        : Number.POSITIVE_INFINITY
    );
    this.p2.x = this.p1.x + e * b;
    this.p2.y = this.p1.y + f * b;
  };
  Z.prototype.extendBackward = function (b) {
    var e = -this.p2.x + this.p1.x,
      f = -this.p2.y + this.p1.y;
    b = Math.min(
      e > 0
        ? (b.upperBound.x - this.p2.x) / e
        : e < 0
        ? (b.lowerBound.x - this.p2.x) / e
        : Number.POSITIVE_INFINITY,
      f > 0
        ? (b.upperBound.y - this.p2.y) / f
        : f < 0
        ? (b.lowerBound.y - this.p2.y) / f
        : Number.POSITIVE_INFINITY
    );
    this.p1.x = this.p2.x + e * b;
    this.p1.y = this.p2.y + f * b;
  };
  d.b2SeparationFunction = function () {
    this.m_localPoint = new p();
    this.m_axis = new p();
  };
  d.prototype.initialize = function (b, e, f, m, r) {
    this.m_proxyA = e;
    this.m_proxyB = m;
    var s = parseInt(b.count);
    y.assert(0 < s && s < 3);
    var v,
      t,
      x,
      C,
      J = (C = x = m = e = 0),
      T = 0;
    J = 0;
    if (s == 1) {
      this.m_type = d.e_points;
      v = this.m_proxyA.getVertex(b.indexA[0]);
      t = this.m_proxyB.getVertex(b.indexB[0]);
      s = v;
      b = f.R;
      e = f.position.x + (b.col1.x * s.x + b.col2.x * s.y);
      m = f.position.y + (b.col1.y * s.x + b.col2.y * s.y);
      s = t;
      b = r.R;
      x = r.position.x + (b.col1.x * s.x + b.col2.x * s.y);
      C = r.position.y + (b.col1.y * s.x + b.col2.y * s.y);
      this.m_axis.x = x - e;
      this.m_axis.y = C - m;
      this.m_axis.normalize();
    } else {
      if (b.indexB[0] == b.indexB[1]) {
        this.m_type = d.FACE_A;
        e = this.m_proxyA.getVertex(b.indexA[0]);
        m = this.m_proxyA.getVertex(b.indexA[1]);
        t = this.m_proxyB.getVertex(b.indexB[0]);
        this.m_localPoint.x = 0.5 * (e.x + m.x);
        this.m_localPoint.y = 0.5 * (e.y + m.y);
        this.m_axis = w.crossVF(w.subtractVV(m, e), 1);
        this.m_axis.normalize();
        s = this.m_axis;
        b = f.R;
        J = b.col1.x * s.x + b.col2.x * s.y;
        T = b.col1.y * s.x + b.col2.y * s.y;
        s = this.m_localPoint;
        b = f.R;
        e = f.position.x + (b.col1.x * s.x + b.col2.x * s.y);
        m = f.position.y + (b.col1.y * s.x + b.col2.y * s.y);
        s = t;
        b = r.R;
        x = r.position.x + (b.col1.x * s.x + b.col2.x * s.y);
        C = r.position.y + (b.col1.y * s.x + b.col2.y * s.y);
        J = (x - e) * J + (C - m) * T;
      } else if (b.indexA[0] == b.indexA[0]) {
        this.m_type = d.FACE_B;
        x = this.m_proxyB.getVertex(b.indexB[0]);
        C = this.m_proxyB.getVertex(b.indexB[1]);
        v = this.m_proxyA.getVertex(b.indexA[0]);
        this.m_localPoint.x = 0.5 * (x.x + C.x);
        this.m_localPoint.y = 0.5 * (x.y + C.y);
        this.m_axis = w.crossVF(w.subtractVV(C, x), 1);
        this.m_axis.normalize();
        s = this.m_axis;
        b = r.R;
        J = b.col1.x * s.x + b.col2.x * s.y;
        T = b.col1.y * s.x + b.col2.y * s.y;
        s = this.m_localPoint;
        b = r.R;
        x = r.position.x + (b.col1.x * s.x + b.col2.x * s.y);
        C = r.position.y + (b.col1.y * s.x + b.col2.y * s.y);
        s = v;
        b = f.R;
        e = f.position.x + (b.col1.x * s.x + b.col2.x * s.y);
        m = f.position.y + (b.col1.y * s.x + b.col2.y * s.y);
        J = (e - x) * J + (m - C) * T;
      } else {
        e = this.m_proxyA.getVertex(b.indexA[0]);
        m = this.m_proxyA.getVertex(b.indexA[1]);
        x = this.m_proxyB.getVertex(b.indexB[0]);
        C = this.m_proxyB.getVertex(b.indexB[1]);
        w.mulX(f, v);
        v = w.mulMV(f.R, w.subtractVV(m, e));
        w.mulX(r, t);
        J = w.mulMV(r.R, w.subtractVV(C, x));
        r = v.x * v.x + v.y * v.y;
        t = J.x * J.x + J.y * J.y;
        b = w.subtractVV(J, v);
        f = v.x * b.x + v.y * b.y;
        b = J.x * b.x + J.y * b.y;
        v = v.x * J.x + v.y * J.y;
        T = r * t - v * v;
        J = 0;
        if (T != 0) J = w.clamp((v * b - f * t) / T, 0, 1);
        if ((v * J + b) / t < 0) J = w.clamp((v - f) / r, 0, 1);
        v = new p();
        v.x = e.x + J * (m.x - e.x);
        v.y = e.y + J * (m.y - e.y);
        t = new p();
        t.x = x.x + J * (C.x - x.x);
        t.y = x.y + J * (C.y - x.y);
        if (J == 0 || J == 1) {
          this.m_type = d.FACE_B;
          this.m_axis = w.crossVF(w.subtractVV(C, x), 1);
          this.m_axis.normalize();
          this.m_localPoint = t;
        } else {
          this.m_type = d.FACE_A;
          this.m_axis = w.crossVF(w.subtractVV(m, e), 1);
          this.m_localPoint = v;
        }
      }
      J < 0 && this.m_axis.negativeSelf();
    }
  };
  d.prototype.Evaluate = function (b, e) {
    var f,
      m,
      r = 0;
    switch (this.m_type) {
      case d.e_points:
        f = w.mulTMV(b.R, this.m_axis);
        m = w.mulTMV(e.R, this.m_axis.getNegative());
        f = this.m_proxyA.getsupportVertex(f);
        m = this.m_proxyB.getsupportVertex(m);
        f = w.mulX(b, f);
        m = w.mulX(e, m);
        return (r = (m.x - f.x) * this.m_axis.x + (m.y - f.y) * this.m_axis.y);
      case d.FACE_A:
        r = w.mulMV(b.R, this.m_axis);
        f = w.mulX(b, this.m_localPoint);
        m = w.mulTMV(e.R, r.getNegative());
        m = this.m_proxyB.getsupportVertex(m);
        m = w.mulX(e, m);
        return (r = (m.x - f.x) * r.x + (m.y - f.y) * r.y);
      case d.FACE_B:
        r = w.mulMV(e.R, this.m_axis);
        m = w.mulX(e, this.m_localPoint);
        f = w.mulTMV(b.R, r.getNegative());
        f = this.m_proxyA.getsupportVertex(f);
        f = w.mulX(b, f);
        return (r = (f.x - m.x) * r.x + (f.y - m.y) * r.y);
      default:
        y.assert(false);
        return 0;
    }
  };
  Box2D.postDefs.push(function () {
    Box2D.Collision.b2SeparationFunction.e_points = 1;
    Box2D.Collision.b2SeparationFunction.FACE_A = 2;
    Box2D.Collision.b2SeparationFunction.FACE_B = 4;
  });
  h.b2Simplex = function () {
    this.m_v1 = new j();
    this.m_v2 = new j();
    this.m_v3 = new j();
    this.m_vertices = new Vector(3);
  };
  h.prototype.b2Simplex = function () {
    this.m_vertices[0] = this.m_v1;
    this.m_vertices[1] = this.m_v2;
    this.m_vertices[2] = this.m_v3;
  };
  h.prototype.ReadCache = function (b, e, f, m, r) {
    y.assert(0 <= b.count && b.count <= 3);
    var s, v;
    this.m_count = b.count;
    for (var t = this.m_vertices, x = 0; x < this.m_count; x++) {
      var C = t[x];
      C.indexA = b.indexA[x];
      C.indexB = b.indexB[x];
      s = e.getVertex(C.indexA);
      v = m.getVertex(C.indexB);
      C.wA = w.mulX(f, s);
      C.wB = w.mulX(r, v);
      C.w = w.subtractVV(C.wB, C.wA);
      C.a = 0;
    }
    if (this.m_count > 1) {
      b = b.metric;
      s = this.GetMetric();
      if (s < 0.5 * b || 2 * b < s || s < Number.MIN_VALUE) this.m_count = 0;
    }
    if (this.m_count == 0) {
      C = t[0];
      C.indexA = 0;
      C.indexB = 0;
      s = e.getVertex(0);
      v = m.getVertex(0);
      C.wA = w.mulX(f, s);
      C.wB = w.mulX(r, v);
      C.w = w.subtractVV(C.wB, C.wA);
      this.m_count = 1;
    }
  };
  h.prototype.WriteCache = function (b) {
    b.metric = this.GetMetric();
    b.count = Box2D.parseUInt(this.m_count);
    for (var e = this.m_vertices, f = 0; f < this.m_count; f++) {
      b.indexA[f] = Box2D.parseUInt(e[f].indexA);
      b.indexB[f] = Box2D.parseUInt(e[f].indexB);
    }
  };
  h.prototype.GetSearchDirection = function () {
    switch (this.m_count) {
      case 1:
        return this.m_v1.w.getNegative();
      case 2:
        var b = w.subtractVV(this.m_v2.w, this.m_v1.w);
        return w.crossVV(b, this.m_v1.w.getNegative()) > 0
          ? w.crossFV(1, b)
          : w.crossVF(b, 1);
      default:
        y.assert(false);
        return new p();
    }
  };
  h.prototype.GetClosestPoint = function () {
    switch (this.m_count) {
      case 0:
        y.assert(false);
        return new p();
      case 1:
        return this.m_v1.w;
      case 2:
        return new p(
          this.m_v1.a * this.m_v1.w.x + this.m_v2.a * this.m_v2.w.x,
          this.m_v1.a * this.m_v1.w.y + this.m_v2.a * this.m_v2.w.y
        );
      default:
        y.assert(false);
        return new p();
    }
  };
  h.prototype.GetWitnessPoints = function (b, e) {
    switch (this.m_count) {
      case 0:
        y.assert(false);
        break;
      case 1:
        b.setV(this.m_v1.wA);
        e.setV(this.m_v1.wB);
        break;
      case 2:
        b.x = this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x;
        b.y = this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y;
        e.x = this.m_v1.a * this.m_v1.wB.x + this.m_v2.a * this.m_v2.wB.x;
        e.y = this.m_v1.a * this.m_v1.wB.y + this.m_v2.a * this.m_v2.wB.y;
        break;
      case 3:
        e.x = b.x =
          this.m_v1.a * this.m_v1.wA.x +
          this.m_v2.a * this.m_v2.wA.x +
          this.m_v3.a * this.m_v3.wA.x;
        e.y = b.y =
          this.m_v1.a * this.m_v1.wA.y +
          this.m_v2.a * this.m_v2.wA.y +
          this.m_v3.a * this.m_v3.wA.y;
        break;
      default:
        y.assert(false);
    }
  };
  h.prototype.GetMetric = function () {
    switch (this.m_count) {
      case 0:
        y.assert(false);
        return 0;
      case 1:
        return 0;
      case 2:
        return w.subtractVV(this.m_v1.w, this.m_v2.w).length();
      case 3:
        return w.crossVV(
          w.subtractVV(this.m_v2.w, this.m_v1.w),
          w.subtractVV(this.m_v3.w, this.m_v1.w)
        );
      default:
        y.assert(false);
        return 0;
    }
  };
  h.prototype.solve2 = function () {
    var b = this.m_v1.w,
      e = this.m_v2.w,
      f = w.subtractVV(e, b);
    b = -(b.x * f.x + b.y * f.y);
    if (b <= 0) this.m_count = this.m_v1.a = 1;
    else {
      e = e.x * f.x + e.y * f.y;
      if (e <= 0) {
        this.m_count = this.m_v2.a = 1;
        this.m_v1.set(this.m_v2);
      } else {
        f = 1 / (e + b);
        this.m_v1.a = e * f;
        this.m_v2.a = b * f;
        this.m_count = 2;
      }
    }
  };
  h.prototype.solve3 = function () {
    var b = this.m_v1.w,
      e = this.m_v2.w,
      f = this.m_v3.w,
      m = w.subtractVV(e, b),
      r = w.dot(b, m),
      s = w.dot(e, m);
    r = -r;
    var v = w.subtractVV(f, b),
      t = w.dot(b, v),
      x = w.dot(f, v);
    t = -t;
    var C = w.subtractVV(f, e),
      J = w.dot(e, C);
    C = w.dot(f, C);
    J = -J;
    v = w.crossVV(m, v);
    m = v * w.crossVV(e, f);
    f = v * w.crossVV(f, b);
    b = v * w.crossVV(b, e);
    if (r <= 0 && t <= 0) this.m_count = this.m_v1.a = 1;
    else if (s > 0 && r > 0 && b <= 0) {
      x = 1 / (s + r);
      this.m_v1.a = s * x;
      this.m_v2.a = r * x;
      this.m_count = 2;
    } else if (x > 0 && t > 0 && f <= 0) {
      s = 1 / (x + t);
      this.m_v1.a = x * s;
      this.m_v3.a = t * s;
      this.m_count = 2;
      this.m_v2.set(this.m_v3);
    } else if (s <= 0 && J <= 0) {
      this.m_count = this.m_v2.a = 1;
      this.m_v1.set(this.m_v2);
    } else if (x <= 0 && C <= 0) {
      this.m_count = this.m_v3.a = 1;
      this.m_v1.set(this.m_v3);
    } else if (C > 0 && J > 0 && m <= 0) {
      s = 1 / (C + J);
      this.m_v2.a = C * s;
      this.m_v3.a = J * s;
      this.m_count = 2;
      this.m_v1.set(this.m_v3);
    } else {
      s = 1 / (m + f + b);
      this.m_v1.a = m * s;
      this.m_v2.a = f * s;
      this.m_v3.a = b * s;
      this.m_count = 3;
    }
  };
  l.SimplexCache = function () {
    this.indexA = new Vector_a2j_Number(3);
    this.indexB = new Vector_a2j_Number(3);
  };
  j.b2SimplexVertex = function () {};
  j.prototype.set = function (b) {
    this.wA.setV(b.wA);
    this.wB.setV(b.wB);
    this.w.setV(b.w);
    this.a = b.a;
    this.indexA = b.indexA;
    this.indexB = b.indexB;
  };
  o.timeOfImpact = function () {};
  o.timeOfImpact = function (b) {
    ++o.b2_toiCalls;
    var e = b.proxyA,
      f = b.proxyB,
      m = b.sweepA,
      r = b.sweepB;
    y.assert(m.t0 == r.t0);
    y.assert(1 - m.t0 > Number.MIN_VALUE);
    var s = e.m_radius + f.m_radius;
    b = b.tolerance;
    var v = 0,
      t = 0,
      x = 0;
    o.s_cache.count = 0;
    for (o.s_distanceInput.useRadii = false; ; ) {
      m.getTransform(o.s_xfA, v);
      r.getTransform(o.s_xfB, v);
      o.s_distanceInput.proxyA = e;
      o.s_distanceInput.proxyB = f;
      o.s_distanceInput.transformA = o.s_xfA;
      o.s_distanceInput.transformB = o.s_xfB;
      W.distance(o.s_distanceOutput, o.s_cache, o.s_distanceInput);
      if (o.s_distanceOutput.distance <= 0) {
        v = 1;
        break;
      }
      o.s_fcn.initialize(o.s_cache, e, o.s_xfA, f, o.s_xfB);
      var C = o.s_fcn.Evaluate(o.s_xfA, o.s_xfB);
      if (C <= 0) {
        v = 1;
        break;
      }
      if (t == 0) x = C > s ? w.max(s - b, 0.75 * s) : w.max(C - b, 0.02 * s);
      if (C - x < 0.5 * b) {
        if (t == 0) {
          v = 1;
          break;
        }
        break;
      }
      var J = v,
        T = v,
        P = 1;
      C = C;
      m.getTransform(o.s_xfA, P);
      r.getTransform(o.s_xfB, P);
      var X = o.s_fcn.Evaluate(o.s_xfA, o.s_xfB);
      if (X >= x) {
        v = 1;
        break;
      }
      for (var $ = 0; ; ) {
        var ba = 0;
        ba = $ & 1 ? T + ((x - C) * (P - T)) / (X - C) : 0.5 * (T + P);
        m.getTransform(o.s_xfA, ba);
        r.getTransform(o.s_xfB, ba);
        var ca = o.s_fcn.Evaluate(o.s_xfA, o.s_xfB);
        if (w.abs(ca - x) < 0.025 * b) {
          J = ba;
          break;
        }
        if (ca > x) {
          T = ba;
          C = ca;
        } else {
          P = ba;
          X = ca;
        }
        ++$;
        ++o.b2_toiRootIters;
        if ($ == 50) break;
      }
      o.b2_toimaxRootIters = w.max(o.b2_toimaxRootIters, $);
      if (J < (1 + 100 * Number.MIN_VALUE) * v) break;
      v = J;
      t++;
      ++o.b2_toiIters;
      if (t == 1e3) break;
    }
    o.b2_toimaxIters = w.max(o.b2_toimaxIters, t);
    return v;
  };
  Box2D.postDefs.push(function () {
    Box2D.Collision.timeOfImpact.b2_toiCalls = 0;
    Box2D.Collision.timeOfImpact.b2_toiIters = 0;
    Box2D.Collision.timeOfImpact.b2_toimaxIters = 0;
    Box2D.Collision.timeOfImpact.b2_toiRootIters = 0;
    Box2D.Collision.timeOfImpact.b2_toimaxRootIters = 0;
    Box2D.Collision.timeOfImpact.s_cache = new l();
    Box2D.Collision.timeOfImpact.s_distanceInput = new Y();
    Box2D.Collision.timeOfImpact.s_xfA = new U();
    Box2D.Collision.timeOfImpact.s_xfB = new U();
    Box2D.Collision.timeOfImpact.s_fcn = new d();
    Box2D.Collision.timeOfImpact.s_distanceOutput = new k();
  });
  q.TOIInput = function () {
    this.proxyA = new z();
    this.proxyB = new z();
    this.sweepA = new A();
    this.sweepB = new A();
  };
  n.WorldManifold = function () {
    this.m_normal = new p();
  };
  n.prototype.WorldManifold = function () {
    this.m_points = new Vector(y.MAX_MANIFOLD_POINTS);
    for (var b = 0; b < y.MAX_MANIFOLD_POINTS; b++) this.m_points[b] = new p();
  };
  n.prototype.initialize = function (b, e, f, m, r) {
    if (f === undefined) f = 0;
    if (r === undefined) r = 0;
    if (b.m_pointCount != 0) {
      var s = 0,
        v,
        t,
        x = 0,
        C = 0,
        J = 0,
        T = 0,
        P = 0;
      v = 0;
      switch (b.m_type) {
        case E.CIRCLES:
          t = e.R;
          v = b.m_localPoint;
          s = e.position.x + t.col1.x * v.x + t.col2.x * v.y;
          e = e.position.y + t.col1.y * v.x + t.col2.y * v.y;
          t = m.R;
          v = b.m_points[0].m_localPoint;
          b = m.position.x + t.col1.x * v.x + t.col2.x * v.y;
          m = m.position.y + t.col1.y * v.x + t.col2.y * v.y;
          v = b - s;
          t = m - e;
          x = v * v + t * t;
          if (x > Number.MIN_VALUE * Number.MIN_VALUE) {
            x = Math.sqrt(x);
            this.m_normal.x = v / x;
            this.m_normal.y = t / x;
          } else {
            this.m_normal.x = 1;
            this.m_normal.y = 0;
          }
          v = e + f * this.m_normal.y;
          m = m - r * this.m_normal.y;
          this.m_points[0].x =
            0.5 * (s + f * this.m_normal.x + (b - r * this.m_normal.x));
          this.m_points[0].y = 0.5 * (v + m);
          break;
        case E.FACE_A:
          t = e.R;
          v = b.m_localPlaneNormal;
          x = t.col1.x * v.x + t.col2.x * v.y;
          C = t.col1.y * v.x + t.col2.y * v.y;
          t = e.R;
          v = b.m_localPoint;
          J = e.position.x + t.col1.x * v.x + t.col2.x * v.y;
          T = e.position.y + t.col1.y * v.x + t.col2.y * v.y;
          this.m_normal.x = x;
          this.m_normal.y = C;
          for (s = 0; s < b.m_pointCount; s++) {
            t = m.R;
            v = b.m_points[s].m_localPoint;
            P = m.position.x + t.col1.x * v.x + t.col2.x * v.y;
            v = m.position.y + t.col1.y * v.x + t.col2.y * v.y;
            this.m_points[s].x =
              P + 0.5 * (f - (P - J) * x - (v - T) * C - r) * x;
            this.m_points[s].y =
              v + 0.5 * (f - (P - J) * x - (v - T) * C - r) * C;
          }
          break;
        case E.FACE_B:
          t = m.R;
          v = b.m_localPlaneNormal;
          x = t.col1.x * v.x + t.col2.x * v.y;
          C = t.col1.y * v.x + t.col2.y * v.y;
          t = m.R;
          v = b.m_localPoint;
          J = m.position.x + t.col1.x * v.x + t.col2.x * v.y;
          T = m.position.y + t.col1.y * v.x + t.col2.y * v.y;
          this.m_normal.x = -x;
          this.m_normal.y = -C;
          for (s = 0; s < b.m_pointCount; s++) {
            t = e.R;
            v = b.m_points[s].m_localPoint;
            P = e.position.x + t.col1.x * v.x + t.col2.x * v.y;
            v = e.position.y + t.col1.y * v.x + t.col2.y * v.y;
            this.m_points[s].x =
              P + 0.5 * (r - (P - J) * x - (v - T) * C - f) * x;
            this.m_points[s].y =
              v + 0.5 * (r - (P - J) * x - (v - T) * C - f) * C;
          }
      }
    }
  };
  a.ClipVertex = function () {
    this.v = new p();
    this.id = new L();
  };
  a.prototype.set = function (b) {
    this.v.setV(b.v);
    this.id.set(b.id);
  };
  c.Features = function () {};
  Object.defineProperty(c.prototype, "referenceEdge", {
    enumerable: false,
    configurable: true,
    get: function () {
      return this._referenceEdge;
    },
  });
  Object.defineProperty(c.prototype, "referenceEdge", {
    enumerable: false,
    configurable: true,
    set: function (b) {
      if (b === undefined) b = 0;
      this._referenceEdge = b;
      this._m_id._key =
        (this._m_id._key & 4294967040) | (this._referenceEdge & 255);
    },
  });
  Object.defineProperty(c.prototype, "incidentEdge", {
    enumerable: false,
    configurable: true,
    get: function () {
      return this._incidentEdge;
    },
  });
  Object.defineProperty(c.prototype, "incidentEdge", {
    enumerable: false,
    configurable: true,
    set: function (b) {
      if (b === undefined) b = 0;
      this._incidentEdge = b;
      this._m_id._key =
        (this._m_id._key & 4294902015) | ((this._incidentEdge << 8) & 65280);
    },
  });
  Object.defineProperty(c.prototype, "incidentVertex", {
    enumerable: false,
    configurable: true,
    get: function () {
      return this._incidentVertex;
    },
  });
  Object.defineProperty(c.prototype, "incidentVertex", {
    enumerable: false,
    configurable: true,
    set: function (b) {
      if (b === undefined) b = 0;
      this._incidentVertex = b;
      this._m_id._key =
        (this._m_id._key & 4278255615) |
        ((this._incidentVertex << 16) & 16711680);
    },
  });
  Object.defineProperty(c.prototype, "flip", {
    enumerable: false,
    configurable: true,
    get: function () {
      return this._flip;
    },
  });
  Object.defineProperty(c.prototype, "flip", {
    enumerable: false,
    configurable: true,
    set: function (b) {
      if (b === undefined) b = 0;
      this._flip = b;
      this._m_id._key =
        (this._m_id._key & 16777215) | ((this._flip << 24) & 4278190080);
    },
  });
})();
(function () {
  var F = Box2D.Common.b2settings,
    G = Box2D.Collision.Shapes.CircleShape,
    K = Box2D.Collision.Shapes.EdgeChainDef,
    y = Box2D.Collision.Shapes.EdgeShape,
    w = Box2D.Collision.Shapes.MassData,
    A = Box2D.Collision.Shapes.PolygonShape,
    U = Box2D.Collision.Shapes.Shape,
    p = Box2D.Common.Math.Mat22,
    B = Box2D.Common.Math.Math,
    Q = Box2D.Common.Math.Transform,
    V = Box2D.Common.Math.Vec2,
    M = Box2D.Collision.distance,
    L = Box2D.Collision.distanceInput,
    I = Box2D.Collision.distanceOutput,
    W = Box2D.Collision.distanceProxy,
    Y = Box2D.Collision.SimplexCache;
  Box2D.inherit(G, Box2D.Collision.Shapes.Shape);
  G.prototype.__super = Box2D.Collision.Shapes.Shape.prototype;
  G.CircleShape = function () {
    Box2D.Collision.Shapes.Shape.Shape.apply(this, arguments);
    this.m_p = new V();
  };
  G.prototype.copy = function () {
    var k = new G();
    k.set(this);
    return k;
  };
  G.prototype.set = function (k) {
    this.__super.set.call(this, k);
    if (Box2D.is(k, G)) this.m_p.setV((k instanceof G ? k : null).m_p);
  };
  G.prototype.testPoint = function (k, z) {
    var u = k.R,
      D = k.position.x + (u.col1.x * this.m_p.x + u.col2.x * this.m_p.y);
    u = k.position.y + (u.col1.y * this.m_p.x + u.col2.y * this.m_p.y);
    D = z.x - D;
    u = z.y - u;
    return D * D + u * u <= this.m_radius * this.m_radius;
  };
  G.prototype.rayCast = function (k, z, u) {
    var D = u.R,
      H =
        z.p1.x -
        (u.position.x + (D.col1.x * this.m_p.x + D.col2.x * this.m_p.y));
    u =
      z.p1.y - (u.position.y + (D.col1.y * this.m_p.x + D.col2.y * this.m_p.y));
    D = z.p2.x - z.p1.x;
    var O = z.p2.y - z.p1.y,
      E = H * D + u * O,
      R = D * D + O * O,
      N = E * E - R * (H * H + u * u - this.m_radius * this.m_radius);
    if (N < 0 || R < Number.MIN_VALUE) return false;
    E = -(E + Math.sqrt(N));
    if (0 <= E && E <= z.maxFraction * R) {
      E /= R;
      k.fraction = E;
      k.normal.x = H + E * D;
      k.normal.y = u + E * O;
      k.normal.normalize();
      return true;
    }
    return false;
  };
  G.prototype.computeAABB = function (k, z) {
    var u = z.R,
      D = z.position.x + (u.col1.x * this.m_p.x + u.col2.x * this.m_p.y);
    u = z.position.y + (u.col1.y * this.m_p.x + u.col2.y * this.m_p.y);
    k.lowerBound.set(D - this.m_radius, u - this.m_radius);
    k.upperBound.set(D + this.m_radius, u + this.m_radius);
  };
  G.prototype.computeMass = function (k, z) {
    if (z === undefined) z = 0;
    k.mass = z * F.PI * this.m_radius * this.m_radius;
    k.center.setV(this.m_p);
    k.I =
      k.mass *
      (0.5 * this.m_radius * this.m_radius +
        (this.m_p.x * this.m_p.x + this.m_p.y * this.m_p.y));
  };
  G.prototype.computeSubmergedArea = function (k, z, u, D) {
    if (z === undefined) z = 0;
    u = B.mulX(u, this.m_p);
    var H = -(B.dot(k, u) - z);
    if (H < -this.m_radius + Number.MIN_VALUE) return 0;
    if (H > this.m_radius) {
      D.setV(u);
      return Math.PI * this.m_radius * this.m_radius;
    }
    z = this.m_radius * this.m_radius;
    var O = H * H;
    H = z * (Math.asin(H / this.m_radius) + Math.PI / 2) + H * Math.sqrt(z - O);
    z = ((-2 / 3) * Math.pow(z - O, 1.5)) / H;
    D.x = u.x + k.x * z;
    D.y = u.y + k.y * z;
    return H;
  };
  G.prototype.getLocalPosition = function () {
    return this.m_p;
  };
  G.prototype.setLocalPosition = function (k) {
    this.m_p.setV(k);
  };
  G.prototype.getRadius = function () {
    return this.m_radius;
  };
  G.prototype.setRadius = function (k) {
    if (k === undefined) k = 0;
    this.m_radius = k;
  };
  G.prototype.CircleShape = function (k) {
    if (k === undefined) k = 0;
    this.__super.Shape.call(this);
    this.m_type = U.e_circleShape;
    this.m_radius = k;
  };
  K.EdgeChainDef = function () {};
  K.prototype.EdgeChainDef = function () {
    this.vertexCount = 0;
    this.isALoop = true;
    this.vertices = [];
  };
  Box2D.inherit(y, Box2D.Collision.Shapes.Shape);
  y.prototype.__super = Box2D.Collision.Shapes.Shape.prototype;
  y.EdgeShape = function () {
    Box2D.Collision.Shapes.Shape.Shape.apply(this, arguments);
    this.s_supportVec = new V();
    this.m_v1 = new V();
    this.m_v2 = new V();
    this.m_coreV1 = new V();
    this.m_coreV2 = new V();
    this.m_normal = new V();
    this.m_direction = new V();
    this.m_cornerDir1 = new V();
    this.m_cornerDir2 = new V();
  };
  y.prototype.testPoint = function () {
    return false;
  };
  y.prototype.rayCast = function (k, z, u) {
    var D,
      H = z.p2.x - z.p1.x,
      O = z.p2.y - z.p1.y;
    D = u.R;
    var E = u.position.x + (D.col1.x * this.m_v1.x + D.col2.x * this.m_v1.y),
      R = u.position.y + (D.col1.y * this.m_v1.x + D.col2.y * this.m_v1.y),
      N = u.position.y + (D.col1.y * this.m_v2.x + D.col2.y * this.m_v2.y) - R;
    u = -(u.position.x + (D.col1.x * this.m_v2.x + D.col2.x * this.m_v2.y) - E);
    D = 100 * Number.MIN_VALUE;
    var S = -(H * N + O * u);
    if (S > D) {
      E = z.p1.x - E;
      var aa = z.p1.y - R;
      R = E * N + aa * u;
      if (0 <= R && R <= z.maxFraction * S) {
        z = -H * aa + O * E;
        if (-D * S <= z && z <= S * (1 + D)) {
          R /= S;
          k.fraction = R;
          z = Math.sqrt(N * N + u * u);
          k.normal.x = N / z;
          k.normal.y = u / z;
          return true;
        }
      }
    }
    return false;
  };
  y.prototype.computeAABB = function (k, z) {
    var u = z.R,
      D = z.position.x + (u.col1.x * this.m_v1.x + u.col2.x * this.m_v1.y),
      H = z.position.y + (u.col1.y * this.m_v1.x + u.col2.y * this.m_v1.y),
      O = z.position.x + (u.col1.x * this.m_v2.x + u.col2.x * this.m_v2.y);
    u = z.position.y + (u.col1.y * this.m_v2.x + u.col2.y * this.m_v2.y);
    if (D < O) {
      k.lowerBound.x = D;
      k.upperBound.x = O;
    } else {
      k.lowerBound.x = O;
      k.upperBound.x = D;
    }
    if (H < u) {
      k.lowerBound.y = H;
      k.upperBound.y = u;
    } else {
      k.lowerBound.y = u;
      k.upperBound.y = H;
    }
  };
  y.prototype.computeMass = function (k) {
    k.mass = 0;
    k.center.setV(this.m_v1);
    k.I = 0;
  };
  y.prototype.computeSubmergedArea = function (k, z, u, D) {
    if (z === undefined) z = 0;
    var H = new V(k.x * z, k.y * z),
      O = B.mulX(u, this.m_v1);
    u = B.mulX(u, this.m_v2);
    var E = B.dot(k, O) - z;
    k = B.dot(k, u) - z;
    if (E > 0)
      if (k > 0) return 0;
      else {
        O.x = (-k / (E - k)) * O.x + (E / (E - k)) * u.x;
        O.y = (-k / (E - k)) * O.y + (E / (E - k)) * u.y;
      }
    else if (k > 0) {
      u.x = (-k / (E - k)) * O.x + (E / (E - k)) * u.x;
      u.y = (-k / (E - k)) * O.y + (E / (E - k)) * u.y;
    }
    D.x = (H.x + O.x + u.x) / 3;
    D.y = (H.y + O.y + u.y) / 3;
    return 0.5 * ((O.x - H.x) * (u.y - H.y) - (O.y - H.y) * (u.x - H.x));
  };
  y.prototype.getlength = function () {
    return this.m_length;
  };
  y.prototype.getVertex1 = function () {
    return this.m_v1;
  };
  y.prototype.getVertex2 = function () {
    return this.m_v2;
  };
  y.prototype.getCoreVertex1 = function () {
    return this.m_coreV1;
  };
  y.prototype.getCoreVertex2 = function () {
    return this.m_coreV2;
  };
  y.prototype.getNormalVector = function () {
    return this.m_normal;
  };
  y.prototype.getDirectionVector = function () {
    return this.m_direction;
  };
  y.prototype.getCorner1Vector = function () {
    return this.m_cornerDir1;
  };
  y.prototype.getCorner2Vector = function () {
    return this.m_cornerDir2;
  };
  y.prototype.corner1IsConvex = function () {
    return this.m_cornerConvex1;
  };
  y.prototype.corner2IsConvex = function () {
    return this.m_cornerConvex2;
  };
  y.prototype.getFirstVertex = function (k) {
    var z = k.R;
    return new V(
      k.position.x + (z.col1.x * this.m_coreV1.x + z.col2.x * this.m_coreV1.y),
      k.position.y + (z.col1.y * this.m_coreV1.x + z.col2.y * this.m_coreV1.y)
    );
  };
  y.prototype.getNextEdge = function () {
    return this.m_nextEdge;
  };
  y.prototype.getPrevEdge = function () {
    return this.m_prevEdge;
  };
  y.prototype.support = function (k, z, u) {
    if (z === undefined) z = 0;
    if (u === undefined) u = 0;
    var D = k.R,
      H =
        k.position.x +
        (D.col1.x * this.m_coreV1.x + D.col2.x * this.m_coreV1.y),
      O =
        k.position.y +
        (D.col1.y * this.m_coreV1.x + D.col2.y * this.m_coreV1.y),
      E =
        k.position.x +
        (D.col1.x * this.m_coreV2.x + D.col2.x * this.m_coreV2.y);
    k =
      k.position.y + (D.col1.y * this.m_coreV2.x + D.col2.y * this.m_coreV2.y);
    if (H * z + O * u > E * z + k * u) {
      this.s_supportVec.x = H;
      this.s_supportVec.y = O;
    } else {
      this.s_supportVec.x = E;
      this.s_supportVec.y = k;
    }
    return this.s_supportVec;
  };
  y.prototype.EdgeShape = function (k, z) {
    this.__super.Shape.call(this);
    this.m_type = U.e_edgeShape;
    this.m_nextEdge = this.m_prevEdge = null;
    this.m_v1 = k;
    this.m_v2 = z;
    this.m_direction.set(this.m_v2.x - this.m_v1.x, this.m_v2.y - this.m_v1.y);
    this.m_length = this.m_direction.normalize();
    this.m_normal.set(this.m_direction.y, -this.m_direction.x);
    this.m_coreV1.set(
      -F.TOI_SLOP * (this.m_normal.x - this.m_direction.x) + this.m_v1.x,
      -F.TOI_SLOP * (this.m_normal.y - this.m_direction.y) + this.m_v1.y
    );
    this.m_coreV2.set(
      -F.TOI_SLOP * (this.m_normal.x + this.m_direction.x) + this.m_v2.x,
      -F.TOI_SLOP * (this.m_normal.y + this.m_direction.y) + this.m_v2.y
    );
    this.m_cornerDir1 = this.m_normal;
    this.m_cornerDir2.set(-this.m_normal.x, -this.m_normal.y);
  };
  y.prototype.setPrevEdge = function (k, z, u, D) {
    this.m_prevEdge = k;
    this.m_coreV1 = z;
    this.m_cornerDir1 = u;
    this.m_cornerConvex1 = D;
  };
  y.prototype.setNextEdge = function (k, z, u, D) {
    this.m_nextEdge = k;
    this.m_coreV2 = z;
    this.m_cornerDir2 = u;
    this.m_cornerConvex2 = D;
  };
  w.MassData = function () {
    this.mass = 0;
    this.center = new V(0, 0);
    this.I = 0;
  };
  Box2D.inherit(A, Box2D.Collision.Shapes.Shape);
  A.prototype.__super = Box2D.Collision.Shapes.Shape.prototype;
  A.PolygonShape = function () {
    Box2D.Collision.Shapes.Shape.Shape.apply(this, arguments);
  };
  A.prototype.copy = function () {
    var k = new A();
    k.set(this);
    return k;
  };
  A.prototype.set = function (k) {
    this.__super.set.call(this, k);
    if (Box2D.is(k, A)) {
      k = k instanceof A ? k : null;
      this.m_centroid.setV(k.m_centroid);
      this.m_vertexCount = k.m_vertexCount;
      this.Reserve(this.m_vertexCount);
      for (var z = 0; z < this.m_vertexCount; z++) {
        this.m_vertices[z].setV(k.m_vertices[z]);
        this.m_normals[z].setV(k.m_normals[z]);
      }
    }
  };
  A.prototype.setAsArray = function (k, z) {
    if (z === undefined) z = 0;
    var u = new Vector(),
      D = 0,
      H;
    for (D = 0; D < k.length; ++D) {
      H = k[D];
      u.push(H);
    }
    this.setAsVector(u, z);
  };
  A.asArray = function (k, z) {
    if (z === undefined) z = 0;
    var u = new A();
    u.setAsArray(k, z);
    return u;
  };
  A.prototype.setAsVector = function (k, z) {
    if (z === undefined) z = 0;
    if (z == 0) z = k.length;
    F.assert(2 <= z);
    this.m_vertexCount = z;
    this.Reserve(z);
    var u = 0;
    for (u = 0; u < this.m_vertexCount; u++) this.m_vertices[u].setV(k[u]);
    for (u = 0; u < this.m_vertexCount; ++u) {
      var D = parseInt(u),
        H = parseInt(u + 1 < this.m_vertexCount ? u + 1 : 0);
      D = B.subtractVV(this.m_vertices[H], this.m_vertices[D]);
      F.assert(D.lengthSquared() > Number.MIN_VALUE);
      this.m_normals[u].setV(B.crossVF(D, 1));
      this.m_normals[u].normalize();
    }
    this.m_centroid = A.computeCentroid(this.m_vertices, this.m_vertexCount);
  };
  A.asVector = function (k, z) {
    if (z === undefined) z = 0;
    var u = new A();
    u.setAsVector(k, z);
    return u;
  };
  A.prototype.setAsBox = function (k, z) {
    if (k === undefined) k = 0;
    if (z === undefined) z = 0;
    this.m_vertexCount = 4;
    this.Reserve(4);
    this.m_vertices[0].set(-k, -z);
    this.m_vertices[1].set(k, -z);
    this.m_vertices[2].set(k, z);
    this.m_vertices[3].set(-k, z);
    this.m_normals[0].set(0, -1);
    this.m_normals[1].set(1, 0);
    this.m_normals[2].set(0, 1);
    this.m_normals[3].set(-1, 0);
    this.m_centroid.setZero();
  };
  A.asBox = function (k, z) {
    if (k === undefined) k = 0;
    if (z === undefined) z = 0;
    var u = new A();
    u.setAsBox(k, z);
    return u;
  };
  A.prototype.setAsOrientedBox = function (k, z, u, D) {
    if (k === undefined) k = 0;
    if (z === undefined) z = 0;
    if (u === undefined) u = null;
    if (D === undefined) D = 0;
    this.m_vertexCount = 4;
    this.Reserve(4);
    this.m_vertices[0].set(-k, -z);
    this.m_vertices[1].set(k, -z);
    this.m_vertices[2].set(k, z);
    this.m_vertices[3].set(-k, z);
    this.m_normals[0].set(0, -1);
    this.m_normals[1].set(1, 0);
    this.m_normals[2].set(0, 1);
    this.m_normals[3].set(-1, 0);
    this.m_centroid = u;
    k = new Q();
    k.position = u;
    k.R.set(D);
    for (u = 0; u < this.m_vertexCount; ++u) {
      this.m_vertices[u] = B.mulX(k, this.m_vertices[u]);
      this.m_normals[u] = B.mulMV(k.R, this.m_normals[u]);
    }
  };
  A.asOrientedBox = function (k, z, u, D) {
    if (k === undefined) k = 0;
    if (z === undefined) z = 0;
    if (u === undefined) u = null;
    if (D === undefined) D = 0;
    var H = new A();
    H.setAsOrientedBox(k, z, u, D);
    return H;
  };
  A.prototype.setAsEdge = function (k, z) {
    this.m_vertexCount = 2;
    this.Reserve(2);
    this.m_vertices[0].setV(k);
    this.m_vertices[1].setV(z);
    this.m_centroid.x = 0.5 * (k.x + z.x);
    this.m_centroid.y = 0.5 * (k.y + z.y);
    this.m_normals[0] = B.crossVF(B.subtractVV(z, k), 1);
    this.m_normals[0].normalize();
    this.m_normals[1].x = -this.m_normals[0].x;
    this.m_normals[1].y = -this.m_normals[0].y;
  };
  A.asEdge = function (k, z) {
    var u = new A();
    u.setAsEdge(k, z);
    return u;
  };
  A.prototype.testPoint = function (k, z) {
    var u;
    u = k.R;
    for (
      var D = z.x - k.position.x,
        H = z.y - k.position.y,
        O = D * u.col1.x + H * u.col1.y,
        E = D * u.col2.x + H * u.col2.y,
        R = 0;
      R < this.m_vertexCount;
      ++R
    ) {
      u = this.m_vertices[R];
      D = O - u.x;
      H = E - u.y;
      u = this.m_normals[R];
      if (u.x * D + u.y * H > 0) return false;
    }
    return true;
  };
  A.prototype.rayCast = function (k, z, u) {
    var D = 0,
      H = z.maxFraction,
      O = 0,
      E = 0,
      R,
      N;
    O = z.p1.x - u.position.x;
    E = z.p1.y - u.position.y;
    R = u.R;
    var S = O * R.col1.x + E * R.col1.y,
      aa = O * R.col2.x + E * R.col2.y;
    O = z.p2.x - u.position.x;
    E = z.p2.y - u.position.y;
    R = u.R;
    z = O * R.col1.x + E * R.col1.y - S;
    R = O * R.col2.x + E * R.col2.y - aa;
    for (var Z = parseInt(-1), d = 0; d < this.m_vertexCount; ++d) {
      N = this.m_vertices[d];
      O = N.x - S;
      E = N.y - aa;
      N = this.m_normals[d];
      O = N.x * O + N.y * E;
      E = N.x * z + N.y * R;
      if (E == 0) {
        if (O < 0) return false;
      } else if (E < 0 && O < D * E) {
        D = O / E;
        Z = d;
      } else if (E > 0 && O < H * E) H = O / E;
      if (H < D - Number.MIN_VALUE) return false;
    }
    if (Z >= 0) {
      k.fraction = D;
      R = u.R;
      N = this.m_normals[Z];
      k.normal.x = R.col1.x * N.x + R.col2.x * N.y;
      k.normal.y = R.col1.y * N.x + R.col2.y * N.y;
      return true;
    }
    return false;
  };
  A.prototype.computeAABB = function (k, z) {
    for (
      var u = z.R,
        D = this.m_vertices[0],
        H = z.position.x + (u.col1.x * D.x + u.col2.x * D.y),
        O = z.position.y + (u.col1.y * D.x + u.col2.y * D.y),
        E = H,
        R = O,
        N = 1;
      N < this.m_vertexCount;
      ++N
    ) {
      D = this.m_vertices[N];
      var S = z.position.x + (u.col1.x * D.x + u.col2.x * D.y);
      D = z.position.y + (u.col1.y * D.x + u.col2.y * D.y);
      H = H < S ? H : S;
      O = O < D ? O : D;
      E = E > S ? E : S;
      R = R > D ? R : D;
    }
    k.lowerBound.x = H - this.m_radius;
    k.lowerBound.y = O - this.m_radius;
    k.upperBound.x = E + this.m_radius;
    k.upperBound.y = R + this.m_radius;
  };
  A.prototype.computeMass = function (k, z) {
    if (z === undefined) z = 0;
    if (this.m_vertexCount == 2) {
      k.center.x = 0.5 * (this.m_vertices[0].x + this.m_vertices[1].x);
      k.center.y = 0.5 * (this.m_vertices[0].y + this.m_vertices[1].y);
      k.mass = 0;
      k.I = 0;
    } else {
      for (
        var u = 0, D = 0, H = 0, O = 0, E = 1 / 3, R = 0;
        R < this.m_vertexCount;
        ++R
      ) {
        var N = this.m_vertices[R],
          S =
            R + 1 < this.m_vertexCount
              ? this.m_vertices[parseInt(R + 1)]
              : this.m_vertices[0],
          aa = N.x - 0,
          Z = N.y - 0,
          d = S.x - 0,
          h = S.y - 0,
          l = aa * h - Z * d,
          j = 0.5 * l;
        H += j;
        u += j * E * (0 + N.x + S.x);
        D += j * E * (0 + N.y + S.y);
        N = aa;
        Z = Z;
        d = d;
        h = h;
        O +=
          l *
          (E * (0.25 * (N * N + d * N + d * d) + (0 * N + 0 * d)) +
            0 +
            (E * (0.25 * (Z * Z + h * Z + h * h) + (0 * Z + 0 * h)) + 0));
      }
      k.mass = z * H;
      u *= 1 / H;
      D *= 1 / H;
      k.center.set(u, D);
      k.I = z * O;
    }
  };
  A.prototype.computeSubmergedArea = function (k, z, u, D) {
    if (z === undefined) z = 0;
    var H = B.mulTMV(u.R, k),
      O = z - B.dot(k, u.position),
      E = new Vector_a2j_Number(),
      R = 0,
      N = parseInt(-1);
    z = parseInt(-1);
    var S = false;
    for (k = k = 0; k < this.m_vertexCount; ++k) {
      E[k] = B.dot(H, this.m_vertices[k]) - O;
      var aa = E[k] < -Number.MIN_VALUE;
      if (k > 0)
        if (aa) {
          if (!S) {
            N = k - 1;
            R++;
          }
        } else if (S) {
          z = k - 1;
          R++;
        }
      S = aa;
    }
    switch (R) {
      case 0:
        if (S) {
          k = new w();
          this.computeMass(k, 1);
          D.setV(B.mulX(u, k.center));
          return k.mass;
        } else return 0;
      case 1:
        if (N == -1) N = this.m_vertexCount - 1;
        else z = this.m_vertexCount - 1;
    }
    k = parseInt((N + 1) % this.m_vertexCount);
    H = parseInt((z + 1) % this.m_vertexCount);
    O = (0 - E[N]) / (E[k] - E[N]);
    E = (0 - E[z]) / (E[H] - E[z]);
    N = new V(
      this.m_vertices[N].x * (1 - O) + this.m_vertices[k].x * O,
      this.m_vertices[N].y * (1 - O) + this.m_vertices[k].y * O
    );
    z = new V(
      this.m_vertices[z].x * (1 - E) + this.m_vertices[H].x * E,
      this.m_vertices[z].y * (1 - E) + this.m_vertices[H].y * E
    );
    E = 0;
    O = new V();
    R = this.m_vertices[k];
    for (k = k; k != H; ) {
      k = (k + 1) % this.m_vertexCount;
      S = k == H ? z : this.m_vertices[k];
      aa = 0.5 * ((R.x - N.x) * (S.y - N.y) - (R.y - N.y) * (S.x - N.x));
      E += aa;
      O.x += (aa * (N.x + R.x + S.x)) / 3;
      O.y += (aa * (N.y + R.y + S.y)) / 3;
      R = S;
    }
    O.multiply(1 / E);
    D.setV(B.mulX(u, O));
    return E;
  };
  A.prototype.getVertexCount = function () {
    return this.m_vertexCount;
  };
  A.prototype.getVertices = function () {
    return this.m_vertices;
  };
  A.prototype.getNormals = function () {
    return this.m_normals;
  };
  A.prototype.getsupport = function (k) {
    for (
      var z = 0,
        u = this.m_vertices[0].x * k.x + this.m_vertices[0].y * k.y,
        D = 1;
      D < this.m_vertexCount;
      ++D
    ) {
      var H = this.m_vertices[D].x * k.x + this.m_vertices[D].y * k.y;
      if (H > u) {
        z = D;
        u = H;
      }
    }
    return z;
  };
  A.prototype.getsupportVertex = function (k) {
    for (
      var z = 0,
        u = this.m_vertices[0].x * k.x + this.m_vertices[0].y * k.y,
        D = 1;
      D < this.m_vertexCount;
      ++D
    ) {
      var H = this.m_vertices[D].x * k.x + this.m_vertices[D].y * k.y;
      if (H > u) {
        z = D;
        u = H;
      }
    }
    return this.m_vertices[z];
  };
  A.prototype.validate = function () {
    return false;
  };
  A.prototype.PolygonShape = function () {
    this.__super.Shape.call(this);
    this.m_type = U.e_polygonShape;
    this.m_centroid = new V();
    this.m_vertices = new Vector();
    this.m_normals = new Vector();
  };
  A.prototype.Reserve = function (k) {
    if (k === undefined) k = 0;
    for (var z = parseInt(this.m_vertices.length); z < k; z++) {
      this.m_vertices[z] = new V();
      this.m_normals[z] = new V();
    }
  };
  A.computeCentroid = function (k, z) {
    if (z === undefined) z = 0;
    for (var u = new V(), D = 0, H = 1 / 3, O = 0; O < z; ++O) {
      var E = k[O],
        R = O + 1 < z ? k[parseInt(O + 1)] : k[0],
        N = 0.5 * ((E.x - 0) * (R.y - 0) - (E.y - 0) * (R.x - 0));
      D += N;
      u.x += N * H * (0 + E.x + R.x);
      u.y += N * H * (0 + E.y + R.y);
    }
    u.x *= 1 / D;
    u.y *= 1 / D;
    return u;
  };
  A.computeOBB = function (k, z, u) {
    if (u === undefined) u = 0;
    var D = 0,
      H = new Vector(u + 1);
    for (D = 0; D < u; ++D) H[D] = z[D];
    H[u] = H[0];
    z = Number.MAX_VALUE;
    for (D = 1; D <= u; ++D) {
      var O = H[parseInt(D - 1)],
        E = H[D].x - O.x,
        R = H[D].y - O.y,
        N = Math.sqrt(E * E + R * R);
      E /= N;
      R /= N;
      for (
        var S = -R,
          aa = E,
          Z = (N = Number.MAX_VALUE),
          d = -Number.MAX_VALUE,
          h = -Number.MAX_VALUE,
          l = 0;
        l < u;
        ++l
      ) {
        var j = H[l].x - O.x,
          o = H[l].y - O.y,
          q = E * j + R * o;
        j = S * j + aa * o;
        if (q < N) N = q;
        if (j < Z) Z = j;
        if (q > d) d = q;
        if (j > h) h = j;
      }
      l = (d - N) * (h - Z);
      if (l < 0.95 * z) {
        z = l;
        k.R.col1.x = E;
        k.R.col1.y = R;
        k.R.col2.x = S;
        k.R.col2.y = aa;
        E = 0.5 * (N + d);
        R = 0.5 * (Z + h);
        S = k.R;
        k.center.x = O.x + (S.col1.x * E + S.col2.x * R);
        k.center.y = O.y + (S.col1.y * E + S.col2.y * R);
        k.extents.x = 0.5 * (d - N);
        k.extents.y = 0.5 * (h - Z);
      }
    }
  };
  Box2D.postDefs.push(function () {
    Box2D.Collision.Shapes.PolygonShape.s_mat = new p();
  });
  U.Shape = function () {};
  U.prototype.copy = function () {
    return null;
  };
  U.prototype.set = function (k) {
    this.m_radius = k.m_radius;
  };
  U.prototype.getType = function () {
    return this.m_type;
  };
  U.prototype.testPoint = function () {
    return false;
  };
  U.prototype.rayCast = function () {
    return false;
  };
  U.prototype.computeAABB = function () {};
  U.prototype.computeMass = function () {};
  U.prototype.computeSubmergedArea = function () {
    return 0;
  };
  U.testOverlap = function (k, z, u, D) {
    var H = new L();
    H.proxyA = new W();
    H.proxyA.set(k);
    H.proxyB = new W();
    H.proxyB.set(u);
    H.transformA = z;
    H.transformB = D;
    H.useRadii = true;
    k = new Y();
    k.count = 0;
    z = new I();
    M.distance(z, k, H);
    return z.distance < 10 * Number.MIN_VALUE;
  };
  U.prototype.Shape = function () {
    this.m_type = U.e_unknownShape;
    this.m_radius = F.LINEAR_SLOP;
  };
  Box2D.postDefs.push(function () {
    Box2D.Collision.Shapes.Shape.e_unknownShape = parseInt(-1);
    Box2D.Collision.Shapes.Shape.e_circleShape = 0;
    Box2D.Collision.Shapes.Shape.e_polygonShape = 1;
    Box2D.Collision.Shapes.Shape.e_edgeShape = 2;
    Box2D.Collision.Shapes.Shape.e_shapeTypeCount = 3;
    Box2D.Collision.Shapes.Shape.HIT_COLLIDE = 1;
    Box2D.Collision.Shapes.Shape.MISS_COLLIDE = 0;
    Box2D.Collision.Shapes.Shape.STARTS_INSIDE_COLLIDE = parseInt(-1);
  });
})();
(function () {
  var F = Box2D.Common.Color,
    G = Box2D.Common.b2settings,
    K = Box2D.Common.Math.Math;
  F.Color = function () {
    this._b = this._g = this._r = 0;
  };
  F.prototype.Color = function (y, w, A) {
    if (y === undefined) y = 0;
    if (w === undefined) w = 0;
    if (A === undefined) A = 0;
    this._r = Box2D.parseUInt(255 * K.clamp(y, 0, 1));
    this._g = Box2D.parseUInt(255 * K.clamp(w, 0, 1));
    this._b = Box2D.parseUInt(255 * K.clamp(A, 0, 1));
  };
  F.prototype.set = function (y, w, A) {
    if (y === undefined) y = 0;
    if (w === undefined) w = 0;
    if (A === undefined) A = 0;
    this._r = Box2D.parseUInt(255 * K.clamp(y, 0, 1));
    this._g = Box2D.parseUInt(255 * K.clamp(w, 0, 1));
    this._b = Box2D.parseUInt(255 * K.clamp(A, 0, 1));
  };
  Object.defineProperty(F.prototype, "r", {
    enumerable: false,
    configurable: true,
    set: function (y) {
      if (y === undefined) y = 0;
      this._r = Box2D.parseUInt(255 * K.clamp(y, 0, 1));
    },
  });
  Object.defineProperty(F.prototype, "g", {
    enumerable: false,
    configurable: true,
    set: function (y) {
      if (y === undefined) y = 0;
      this._g = Box2D.parseUInt(255 * K.clamp(y, 0, 1));
    },
  });
  Object.defineProperty(F.prototype, "b", {
    enumerable: false,
    configurable: true,
    set: function (y) {
      if (y === undefined) y = 0;
      this._b = Box2D.parseUInt(255 * K.clamp(y, 0, 1));
    },
  });
  Object.defineProperty(F.prototype, "color", {
    enumerable: false,
    configurable: true,
    get: function () {
      return (this._r << 16) | (this._g << 8) | this._b;
    },
  });
  G.b2settings = function () {};
  G.mixFriction = function (y, w) {
    if (y === undefined) y = 0;
    if (w === undefined) w = 0;
    return Math.sqrt(y * w);
  };
  G.mixRestitution = function (y, w) {
    if (y === undefined) y = 0;
    if (w === undefined) w = 0;
    return y > w ? y : w;
  };
  G.assert = function (y) {
    if (!y) throw "Assertion Failed";
  };
  Box2D.postDefs.push(function () {
    Box2D.Common.b2settings.VERSION = "2.1alpha";
    Box2D.Common.b2settings.USHRT_MAX = 65535;
    Box2D.Common.b2settings.PI = Math.PI;
    Box2D.Common.b2settings.MAX_MANIFOLD_POINTS = 2;
    Box2D.Common.b2settings.AABB_EXTENSION = 0.1;
    Box2D.Common.b2settings.AABB_MULTIPLIER = 2;
    Box2D.Common.b2settings.POLYGON_RADIUS = 2 * G.LINEAR_SLOP;
    Box2D.Common.b2settings.LINEAR_SLOP = 0.005;
    Box2D.Common.b2settings.ANGULAR_SLOP = (2 / 180) * G.PI;
    Box2D.Common.b2settings.TOI_SLOP = 8 * G.LINEAR_SLOP;
    Box2D.Common.b2settings.MAX_TOI_CONTACTS_PER_ISLAND = 32;
    Box2D.Common.b2settings.MAX_TOI_JOINTS_PER_ISLAND = 32;
    Box2D.Common.b2settings.VELOCITY_THRESHOLD = 1;
    Box2D.Common.b2settings.MAX_LINEAR_CORRECTION = 0.2;
    Box2D.Common.b2settings.MAX_ANGULAR_CORRECTION = (8 / 180) * G.PI;
    Box2D.Common.b2settings.MAX_TRANSLATION = 2;
    Box2D.Common.b2settings.MAX_TRANSLATIONSquared =
      G.MAX_TRANSLATION * G.MAX_TRANSLATION;
    Box2D.Common.b2settings.MAX_ROTATION = 0.5 * G.PI;
    Box2D.Common.b2settings.MAX_ROTATIONSquared =
      G.MAX_ROTATION * G.MAX_ROTATION;
    Box2D.Common.b2settings.CONTACT_BAUMGARTE = 0.2;
    Box2D.Common.b2settings.TIME_TO_SLEEP = 0.5;
    Box2D.Common.b2settings.LINEAR_SLEEP_TOLERANCE = 0.01;
    Box2D.Common.b2settings.ANGULAR_SLEEP_TOLERANCE = (2 / 180) * G.PI;
  });
})();
(function () {
  var F = Box2D.Common.Math.Mat22,
    G = Box2D.Common.Math.Mat33,
    K = Box2D.Common.Math.Math,
    y = Box2D.Common.Math.Sweep,
    w = Box2D.Common.Math.Transform,
    A = Box2D.Common.Math.Vec2,
    U = Box2D.Common.Math.Vec3;
  F.Mat22 = function () {
    this.col1 = new A();
    this.col2 = new A();
  };
  F.prototype.Mat22 = function () {
    this.setIdentity();
  };
  F.fromAngle = function (p) {
    if (p === undefined) p = 0;
    var B = new F();
    B.set(p);
    return B;
  };
  F.fromVV = function (p, B) {
    var Q = new F();
    Q.setVV(p, B);
    return Q;
  };
  F.prototype.set = function (p) {
    if (p === undefined) p = 0;
    var B = Math.cos(p);
    p = Math.sin(p);
    this.col1.x = B;
    this.col2.x = -p;
    this.col1.y = p;
    this.col2.y = B;
  };
  F.prototype.setVV = function (p, B) {
    this.col1.setV(p);
    this.col2.setV(B);
  };
  F.prototype.copy = function () {
    var p = new F();
    p.setM(this);
    return p;
  };
  F.prototype.setM = function (p) {
    this.col1.setV(p.col1);
    this.col2.setV(p.col2);
  };
  F.prototype.addM = function (p) {
    this.col1.x += p.col1.x;
    this.col1.y += p.col1.y;
    this.col2.x += p.col2.x;
    this.col2.y += p.col2.y;
  };
  F.prototype.setIdentity = function () {
    this.col1.x = 1;
    this.col2.x = 0;
    this.col1.y = 0;
    this.col2.y = 1;
  };
  F.prototype.setZero = function () {
    this.col1.x = 0;
    this.col2.x = 0;
    this.col1.y = 0;
    this.col2.y = 0;
  };
  F.prototype.getAngle = function () {
    return Math.atan2(this.col1.y, this.col1.x);
  };
  F.prototype.getInverse = function (p) {
    var B = this.col1.x,
      Q = this.col2.x,
      V = this.col1.y,
      M = this.col2.y,
      L = B * M - Q * V;
    if (L != 0) L = 1 / L;
    p.col1.x = L * M;
    p.col2.x = -L * Q;
    p.col1.y = -L * V;
    p.col2.y = L * B;
    return p;
  };
  F.prototype.solve = function (p, B, Q) {
    if (B === undefined) B = 0;
    if (Q === undefined) Q = 0;
    var V = this.col1.x,
      M = this.col2.x,
      L = this.col1.y,
      I = this.col2.y,
      W = V * I - M * L;
    if (W != 0) W = 1 / W;
    p.x = W * (I * B - M * Q);
    p.y = W * (V * Q - L * B);
    return p;
  };
  F.prototype.abs = function () {
    this.col1.abs();
    this.col2.abs();
  };
  G.Mat33 = function () {
    this.col1 = new U();
    this.col2 = new U();
    this.col3 = new U();
  };
  G.prototype.Mat33 = function (p, B, Q) {
    if (p === undefined) p = null;
    if (B === undefined) B = null;
    if (Q === undefined) Q = null;
    if (!p && !B && !Q) {
      this.col1.setZero();
      this.col2.setZero();
      this.col3.setZero();
    } else {
      this.col1.setV(p);
      this.col2.setV(B);
      this.col3.setV(Q);
    }
  };
  G.prototype.setVVV = function (p, B, Q) {
    this.col1.setV(p);
    this.col2.setV(B);
    this.col3.setV(Q);
  };
  G.prototype.copy = function () {
    return new G(this.col1, this.col2, this.col3);
  };
  G.prototype.setM = function (p) {
    this.col1.setV(p.col1);
    this.col2.setV(p.col2);
    this.col3.setV(p.col3);
  };
  G.prototype.addM = function (p) {
    this.col1.x += p.col1.x;
    this.col1.y += p.col1.y;
    this.col1.z += p.col1.z;
    this.col2.x += p.col2.x;
    this.col2.y += p.col2.y;
    this.col2.z += p.col2.z;
    this.col3.x += p.col3.x;
    this.col3.y += p.col3.y;
    this.col3.z += p.col3.z;
  };
  G.prototype.setIdentity = function () {
    this.col1.x = 1;
    this.col2.x = 0;
    this.col3.x = 0;
    this.col1.y = 0;
    this.col2.y = 1;
    this.col3.y = 0;
    this.col1.z = 0;
    this.col2.z = 0;
    this.col3.z = 1;
  };
  G.prototype.setZero = function () {
    this.col1.x = 0;
    this.col2.x = 0;
    this.col3.x = 0;
    this.col1.y = 0;
    this.col2.y = 0;
    this.col3.y = 0;
    this.col1.z = 0;
    this.col2.z = 0;
    this.col3.z = 0;
  };
  G.prototype.solve22 = function (p, B, Q) {
    if (B === undefined) B = 0;
    if (Q === undefined) Q = 0;
    var V = this.col1.x,
      M = this.col2.x,
      L = this.col1.y,
      I = this.col2.y,
      W = V * I - M * L;
    if (W != 0) W = 1 / W;
    p.x = W * (I * B - M * Q);
    p.y = W * (V * Q - L * B);
    return p;
  };
  G.prototype.solve33 = function (p, B, Q, V) {
    if (B === undefined) B = 0;
    if (Q === undefined) Q = 0;
    if (V === undefined) V = 0;
    var M = this.col1.x,
      L = this.col1.y,
      I = this.col1.z,
      W = this.col2.x,
      Y = this.col2.y,
      k = this.col2.z,
      z = this.col3.x,
      u = this.col3.y,
      D = this.col3.z,
      H = M * (Y * D - k * u) + L * (k * z - W * D) + I * (W * u - Y * z);
    if (H != 0) H = 1 / H;
    p.x = H * (B * (Y * D - k * u) + Q * (k * z - W * D) + V * (W * u - Y * z));
    p.y = H * (M * (Q * D - V * u) + L * (V * z - B * D) + I * (B * u - Q * z));
    p.z = H * (M * (Y * V - k * Q) + L * (k * B - W * V) + I * (W * Q - Y * B));
    return p;
  };
  K.Math = function () {};
  K.isValid = function (p) {
    if (p === undefined) p = 0;
    return isFinite(p);
  };
  K.dot = function (p, B) {
    return p.x * B.x + p.y * B.y;
  };
  K.crossVV = function (p, B) {
    return p.x * B.y - p.y * B.x;
  };
  K.crossVF = function (p, B) {
    if (B === undefined) B = 0;
    return new A(B * p.y, -B * p.x);
  };
  K.crossFV = function (p, B) {
    if (p === undefined) p = 0;
    return new A(-p * B.y, p * B.x);
  };
  K.mulMV = function (p, B) {
    return new A(
      p.col1.x * B.x + p.col2.x * B.y,
      p.col1.y * B.x + p.col2.y * B.y
    );
  };
  K.mulTMV = function (p, B) {
    return new A(K.dot(B, p.col1), K.dot(B, p.col2));
  };
  K.mulX = function (p, B) {
    var Q = K.mulMV(p.R, B);
    Q.x += p.position.x;
    Q.y += p.position.y;
    return Q;
  };
  K.mulXT = function (p, B) {
    var Q = K.subtractVV(B, p.position),
      V = Q.x * p.R.col1.x + Q.y * p.R.col1.y;
    Q.y = Q.x * p.R.col2.x + Q.y * p.R.col2.y;
    Q.x = V;
    return Q;
  };
  K.addVV = function (p, B) {
    return new A(p.x + B.x, p.y + B.y);
  };
  K.subtractVV = function (p, B) {
    return new A(p.x - B.x, p.y - B.y);
  };
  K.distance = function (p, B) {
    var Q = p.x - B.x,
      V = p.y - B.y;
    return Math.sqrt(Q * Q + V * V);
  };
  K.distanceSquared = function (p, B) {
    var Q = p.x - B.x,
      V = p.y - B.y;
    return Q * Q + V * V;
  };
  K.mulFV = function (p, B) {
    if (p === undefined) p = 0;
    return new A(p * B.x, p * B.y);
  };
  K.addMM = function (p, B) {
    return F.fromVV(K.addVV(p.col1, B.col1), K.addVV(p.col2, B.col2));
  };
  K.mulMM = function (p, B) {
    return F.fromVV(K.mulMV(p, B.col1), K.mulMV(p, B.col2));
  };
  K.mulTMM = function (p, B) {
    var Q = new A(K.dot(p.col1, B.col1), K.dot(p.col2, B.col1)),
      V = new A(K.dot(p.col1, B.col2), K.dot(p.col2, B.col2));
    return F.fromVV(Q, V);
  };
  K.abs = function (p) {
    if (p === undefined) p = 0;
    return p > 0 ? p : -p;
  };
  K.absV = function (p) {
    return new A(K.abs(p.x), K.abs(p.y));
  };
  K.absM = function (p) {
    return F.fromVV(K.absV(p.col1), K.absV(p.col2));
  };
  K.min = function (p, B) {
    if (p === undefined) p = 0;
    if (B === undefined) B = 0;
    return p < B ? p : B;
  };
  K.minV = function (p, B) {
    return new A(K.min(p.x, B.x), K.min(p.y, B.y));
  };
  K.max = function (p, B) {
    if (p === undefined) p = 0;
    if (B === undefined) B = 0;
    return p > B ? p : B;
  };
  K.maxV = function (p, B) {
    return new A(K.max(p.x, B.x), K.max(p.y, B.y));
  };
  K.clamp = function (p, B, Q) {
    if (p === undefined) p = 0;
    if (B === undefined) B = 0;
    if (Q === undefined) Q = 0;
    return p < B ? B : p > Q ? Q : p;
  };
  K.clampV = function (p, B, Q) {
    return K.maxV(B, K.minV(p, Q));
  };
  K.swap = function (p, B) {
    var Q = p[0];
    p[0] = B[0];
    B[0] = Q;
  };
  K.random = function () {
    return Math.random() * 2 - 1;
  };
  K.randomRange = function (p, B) {
    if (p === undefined) p = 0;
    if (B === undefined) B = 0;
    var Q = Math.random();
    return (Q = (B - p) * Q + p);
  };
  K.nextPowerOfTwo = function (p) {
    if (p === undefined) p = 0;
    p |= (p >> 1) & 2147483647;
    p |= (p >> 2) & 1073741823;
    p |= (p >> 4) & 268435455;
    p |= (p >> 8) & 16777215;
    p |= (p >> 16) & 65535;
    return p + 1;
  };
  K.isPowerOfTwo = function (p) {
    if (p === undefined) p = 0;
    return p > 0 && (p & (p - 1)) == 0;
  };
  Box2D.postDefs.push(function () {
    Box2D.Common.Math.Math.VEC2_ZERO = new A(0, 0);
    Box2D.Common.Math.Math.Mat22_identity = F.fromVV(new A(1, 0), new A(0, 1));
    Box2D.Common.Math.Math.TRANSFORM_IDENTITY = new w(
      K.VEC2_ZERO,
      K.Mat22_identity
    );
  });
  y.Sweep = function () {
    this.localCenter = new A();
    this.c0 = new A();
    this.c = new A();
  };
  y.prototype.set = function (p) {
    this.localCenter.setV(p.localCenter);
    this.c0.setV(p.c0);
    this.c.setV(p.c);
    this.a0 = p.a0;
    this.a = p.a;
    this.t0 = p.t0;
  };
  y.prototype.copy = function () {
    var p = new y();
    p.localCenter.setV(this.localCenter);
    p.c0.setV(this.c0);
    p.c.setV(this.c);
    p.a0 = this.a0;
    p.a = this.a;
    p.t0 = this.t0;
    return p;
  };
  y.prototype.getTransform = function (p, B) {
    if (B === undefined) B = 0;
    p.position.x = (1 - B) * this.c0.x + B * this.c.x;
    p.position.y = (1 - B) * this.c0.y + B * this.c.y;
    p.R.set((1 - B) * this.a0 + B * this.a);
    var Q = p.R;
    p.position.x -=
      Q.col1.x * this.localCenter.x + Q.col2.x * this.localCenter.y;
    p.position.y -=
      Q.col1.y * this.localCenter.x + Q.col2.y * this.localCenter.y;
  };
  y.prototype.advance = function (p) {
    if (p === undefined) p = 0;
    if (this.t0 < p && 1 - this.t0 > Number.MIN_VALUE) {
      var B = (p - this.t0) / (1 - this.t0);
      this.c0.x = (1 - B) * this.c0.x + B * this.c.x;
      this.c0.y = (1 - B) * this.c0.y + B * this.c.y;
      this.a0 = (1 - B) * this.a0 + B * this.a;
      this.t0 = p;
    }
  };
  w.Transform = function () {
    this.position = new A();
    this.R = new F();
  };
  w.prototype.Transform = function (p, B) {
    if (p === undefined) p = null;
    if (B === undefined) B = null;
    if (p) {
      this.position.setV(p);
      this.R.setM(B);
    }
  };
  w.prototype.initialize = function (p, B) {
    this.position.setV(p);
    this.R.setM(B);
  };
  w.prototype.setIdentity = function () {
    this.position.setZero();
    this.R.setIdentity();
  };
  w.prototype.set = function (p) {
    this.position.setV(p.position);
    this.R.setM(p.R);
  };
  w.prototype.getAngle = function () {
    return Math.atan2(this.R.col1.y, this.R.col1.x);
  };
  A.Vec2 = function () {};
  A.prototype.Vec2 = function (p, B) {
    if (p === undefined) p = 0;
    if (B === undefined) B = 0;
    this.x = p;
    this.y = B;
  };
  A.prototype.setZero = function () {
    this.y = this.x = 0;
  };
  A.prototype.set = function (p, B) {
    if (p === undefined) p = 0;
    if (B === undefined) B = 0;
    this.x = p;
    this.y = B;
  };
  A.prototype.setV = function (p) {
    this.x = p.x;
    this.y = p.y;
  };
  A.prototype.getNegative = function () {
    return new A(-this.x, -this.y);
  };
  A.prototype.negativeSelf = function () {
    this.x = -this.x;
    this.y = -this.y;
  };
  A.make = function (p, B) {
    if (p === undefined) p = 0;
    if (B === undefined) B = 0;
    return new A(p, B);
  };
  A.prototype.copy = function () {
    return new A(this.x, this.y);
  };
  A.prototype.add = function (p) {
    this.x += p.x;
    this.y += p.y;
  };
  A.prototype.subtract = function (p) {
    this.x -= p.x;
    this.y -= p.y;
  };
  A.prototype.multiply = function (p) {
    if (p === undefined) p = 0;
    this.x *= p;
    this.y *= p;
  };
  A.prototype.mulM = function (p) {
    var B = this.x;
    this.x = p.col1.x * B + p.col2.x * this.y;
    this.y = p.col1.y * B + p.col2.y * this.y;
  };
  A.prototype.mulTM = function (p) {
    var B = K.dot(this, p.col1);
    this.y = K.dot(this, p.col2);
    this.x = B;
  };
  A.prototype.crossVF = function (p) {
    if (p === undefined) p = 0;
    var B = this.x;
    this.x = p * this.y;
    this.y = -p * B;
  };
  A.prototype.crossFV = function (p) {
    if (p === undefined) p = 0;
    var B = this.x;
    this.x = -p * this.y;
    this.y = p * B;
  };
  A.prototype.minV = function (p) {
    this.x = this.x < p.x ? this.x : p.x;
    this.y = this.y < p.y ? this.y : p.y;
  };
  A.prototype.maxV = function (p) {
    this.x = this.x > p.x ? this.x : p.x;
    this.y = this.y > p.y ? this.y : p.y;
  };
  A.prototype.abs = function () {
    if (this.x < 0) this.x = -this.x;
    if (this.y < 0) this.y = -this.y;
  };
  A.prototype.length = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  };
  A.prototype.lengthSquared = function () {
    return this.x * this.x + this.y * this.y;
  };
  A.prototype.normalize = function () {
    var p = Math.sqrt(this.x * this.x + this.y * this.y);
    if (p < Number.MIN_VALUE) return 0;
    var B = 1 / p;
    this.x *= B;
    this.y *= B;
    return p;
  };
  A.prototype.isValid = function () {
    return K.isValid(this.x) && K.isValid(this.y);
  };
  U.Vec3 = function () {};
  U.prototype.Vec3 = function (p, B, Q) {
    if (p === undefined) p = 0;
    if (B === undefined) B = 0;
    if (Q === undefined) Q = 0;
    this.x = p;
    this.y = B;
    this.z = Q;
  };
  U.prototype.setZero = function () {
    this.x = this.y = this.z = 0;
  };
  U.prototype.set = function (p, B, Q) {
    if (p === undefined) p = 0;
    if (B === undefined) B = 0;
    if (Q === undefined) Q = 0;
    this.x = p;
    this.y = B;
    this.z = Q;
  };
  U.prototype.setV = function (p) {
    this.x = p.x;
    this.y = p.y;
    this.z = p.z;
  };
  U.prototype.getNegative = function () {
    return new U(-this.x, -this.y, -this.z);
  };
  U.prototype.negativeSelf = function () {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
  };
  U.prototype.copy = function () {
    return new U(this.x, this.y, this.z);
  };
  U.prototype.add = function (p) {
    this.x += p.x;
    this.y += p.y;
    this.z += p.z;
  };
  U.prototype.subtract = function (p) {
    this.x -= p.x;
    this.y -= p.y;
    this.z -= p.z;
  };
  U.prototype.multiply = function (p) {
    if (p === undefined) p = 0;
    this.x *= p;
    this.y *= p;
    this.z *= p;
  };
})();
(function () {
  var F = Box2D.Common.Math.Math,
    G = Box2D.Common.Math.Sweep,
    K = Box2D.Common.Math.Transform,
    y = Box2D.Common.Math.Vec2,
    w = Box2D.Common.Color,
    A = Box2D.Common.b2settings,
    U = Box2D.Collision.AABB,
    p = Box2D.Collision.ContactPoint,
    B = Box2D.Collision.DynamicTreeBroadPhase,
    Q = Box2D.Collision.b2rayCastInput,
    V = Box2D.Collision.b2rayCastOutput,
    M = Box2D.Collision.Shapes.CircleShape,
    L = Box2D.Collision.Shapes.EdgeShape,
    I = Box2D.Collision.Shapes.MassData,
    W = Box2D.Collision.Shapes.PolygonShape,
    Y = Box2D.Collision.Shapes.Shape,
    k = Box2D.Dynamics.Body,
    z = Box2D.Dynamics.BodyDef,
    u = Box2D.Dynamics.ContactFilter,
    D = Box2D.Dynamics.ContactImpulse,
    H = Box2D.Dynamics.ContactListener,
    O = Box2D.Dynamics.ContactManager,
    E = Box2D.Dynamics.DebugDraw,
    R = Box2D.Dynamics.DestructionListener,
    N = Box2D.Dynamics.FilterData,
    S = Box2D.Dynamics.Fixture,
    aa = Box2D.Dynamics.FixtureDef,
    Z = Box2D.Dynamics.Island,
    d = Box2D.Dynamics.Timestep,
    h = Box2D.Dynamics.World,
    l = Box2D.Dynamics.Contacts.Contact,
    j = Box2D.Dynamics.Contacts.ContactFactory,
    o = Box2D.Dynamics.Contacts.Contactsolver,
    q = Box2D.Dynamics.Joints.Joint,
    n = Box2D.Dynamics.Joints.PulleyJoint;
  k.Body = function () {
    this.m_xf = new K();
    this.m_sweep = new G();
    this.m_linearVelocity = new y();
    this.m_force = new y();
  };
  k.prototype.connectEdges = function (a, c, g) {
    if (g === undefined) g = 0;
    var b = Math.atan2(c.getDirectionVector().y, c.getDirectionVector().x);
    g = F.mulFV(Math.tan((b - g) * 0.5), c.getDirectionVector());
    g = F.subtractVV(g, c.getNormalVector());
    g = F.mulFV(A.TOI_SLOP, g);
    g = F.addVV(g, c.getVertex1());
    var e = F.addVV(a.getDirectionVector(), c.getDirectionVector());
    e.normalize();
    var f = F.dot(a.getDirectionVector(), c.getNormalVector()) > 0;
    a.setNextEdge(c, g, e, f);
    c.setPrevEdge(a, g, e, f);
    return b;
  };
  k.prototype.createFixture = function (a) {
    if (this.m_world.isLocked() == true) return null;
    var c = new S();
    c.create(this, this.m_xf, a);
    this.m_flags & k.e_activeFlag &&
      c.createProxy(this.m_world.m_contactManager.m_broadPhase, this.m_xf);
    c.m_next = this.m_fixtureList;
    this.m_fixtureList = c;
    ++this.m_fixtureCount;
    c.m_body = this;
    c.m_density > 0 && this.resetMassData();
    this.m_world.m_flags |= h.NEW_FIXTURE;
    return c;
  };
  k.prototype.createFixture2 = function (a, c) {
    if (c === undefined) c = 0;
    var g = new aa();
    g.shape = a;
    g.density = c;
    return this.createFixture(g);
  };
  k.prototype.destroyFixture = function (a) {
    if (this.m_world.isLocked() != true) {
      for (var c = this.m_fixtureList, g = null; c != null; ) {
        if (c == a) {
          if (g) g.m_next = a.m_next;
          else this.m_fixtureList = a.m_next;
          break;
        }
        g = c;
        c = c.m_next;
      }
      for (c = this.m_contactList; c; ) {
        g = c.contact;
        c = c.next;
        var b = g.getFixtureA(),
          e = g.getFixtureB();
        if (a == b || a == e) this.m_world.m_contactManager.destroy(g);
      }
      this.m_flags & k.e_activeFlag &&
        a.destroyProxy(this.m_world.m_contactManager.m_broadPhase);
      a.destroy();
      a.m_body = null;
      a.m_next = null;
      --this.m_fixtureCount;
      this.resetMassData();
    }
  };
  k.prototype.setPositionAndAngle = function (a, c) {
    if (c === undefined) c = 0;
    var g;
    if (this.m_world.isLocked() != true) {
      this.m_xf.R.set(c);
      this.m_xf.position.setV(a);
      g = this.m_xf.R;
      var b = this.m_sweep.localCenter;
      this.m_sweep.c.x = g.col1.x * b.x + g.col2.x * b.y;
      this.m_sweep.c.y = g.col1.y * b.x + g.col2.y * b.y;
      this.m_sweep.c.x += this.m_xf.position.x;
      this.m_sweep.c.y += this.m_xf.position.y;
      this.m_sweep.c0.setV(this.m_sweep.c);
      this.m_sweep.a0 = this.m_sweep.a = c;
      b = this.m_world.m_contactManager.m_broadPhase;
      for (g = this.m_fixtureList; g; g = g.m_next)
        g.Synchronize(b, this.m_xf, this.m_xf);
      this.m_world.m_contactManager.findNewContacts();
    }
  };
  k.prototype.setTransform = function (a) {
    this.setPositionAndAngle(a.position, a.getAngle());
  };
  k.prototype.getTransform = function () {
    return this.m_xf;
  };
  k.prototype.getPosition = function () {
    return this.m_xf.position;
  };
  k.prototype.setPosition = function (a) {
    this.setPositionAndAngle(a, this.getAngle());
  };
  k.prototype.getAngle = function () {
    return this.m_sweep.a;
  };
  k.prototype.setAngle = function (a) {
    if (a === undefined) a = 0;
    this.setPositionAndAngle(this.getPosition(), a);
  };
  k.prototype.getWorldCenter = function () {
    return this.m_sweep.c;
  };
  k.prototype.getLocalCenter = function () {
    return this.m_sweep.localCenter;
  };
  k.prototype.setLinearVelocity = function (a) {
    this.m_type != k.STATIC_BODY && this.m_linearVelocity.setV(a);
  };
  k.prototype.getLinearVelocity = function () {
    return this.m_linearVelocity;
  };
  k.prototype.setAngularVelocity = function (a) {
    if (a === undefined) a = 0;
    if (this.m_type != k.STATIC_BODY) this.m_angularVelocity = a;
  };
  k.prototype.getAngularVelocity = function () {
    return this.m_angularVelocity;
  };
  k.prototype.getDefinition = function () {
    var a = new z();
    a.type = this.getType();
    a.allowSleep = (this.m_flags & k.e_allowSleepFlag) == k.e_allowSleepFlag;
    a.angle = this.getAngle();
    a.angularDamping = this.m_angularDamping;
    a.angularVelocity = this.m_angularVelocity;
    a.fixedRotation =
      (this.m_flags & k.e_fixedRotationFlag) == k.e_fixedRotationFlag;
    a.bullet = (this.m_flags & k.e_bulletFlag) == k.e_bulletFlag;
    a.awake = (this.m_flags & k.e_awakeFlag) == k.e_awakeFlag;
    a.linearDamping = this.m_linearDamping;
    a.linearVelocity.setV(this.getLinearVelocity());
    a.position = this.getPosition();
    a.userData = this.getUserData();
    return a;
  };
  k.prototype.applyForce = function (a, c) {
    if (this.m_type == k.DYNAMIC_BODY) {
      this.isAwake() == false && this.setAwake(true);
      this.m_force.x += a.x;
      this.m_force.y += a.y;
      this.m_torque +=
        (c.x - this.m_sweep.c.x) * a.y - (c.y - this.m_sweep.c.y) * a.x;
    }
  };
  k.prototype.applyTorque = function (a) {
    if (a === undefined) a = 0;
    if (this.m_type == k.DYNAMIC_BODY) {
      this.isAwake() == false && this.setAwake(true);
      this.m_torque += a;
    }
  };
  k.prototype.applyImpulse = function (a, c) {
    if (this.m_type == k.DYNAMIC_BODY) {
      this.isAwake() == false && this.setAwake(true);
      this.m_linearVelocity.x += this.m_invMass * a.x;
      this.m_linearVelocity.y += this.m_invMass * a.y;
      this.m_angularVelocity +=
        this.m_invI *
        ((c.x - this.m_sweep.c.x) * a.y - (c.y - this.m_sweep.c.y) * a.x);
    }
  };
  k.prototype.split = function (a) {
    for (
      var c = this.getLinearVelocity().copy(),
        g = this.getAngularVelocity(),
        b = this.getWorldCenter(),
        e = this.m_world.createBody(this.getDefinition()),
        f,
        m = this.m_fixtureList;
      m;

    )
      if (a(m)) {
        var r = m.m_next;
        if (f) f.m_next = r;
        else this.m_fixtureList = r;
        this.m_fixtureCount--;
        m.m_next = e.m_fixtureList;
        e.m_fixtureList = m;
        e.m_fixtureCount++;
        m.m_body = e;
        m = r;
      } else {
        f = m;
        m = m.m_next;
      }
    this.resetMassData();
    e.resetMassData();
    f = this.getWorldCenter();
    a = e.getWorldCenter();
    f = F.addVV(c, F.crossFV(g, F.subtractVV(f, b)));
    c = F.addVV(c, F.crossFV(g, F.subtractVV(a, b)));
    this.setLinearVelocity(f);
    e.setLinearVelocity(c);
    this.setAngularVelocity(g);
    e.setAngularVelocity(g);
    this.SynchronizeFixtures();
    e.SynchronizeFixtures();
    return e;
  };
  k.prototype.merge = function (a) {
    var c;
    for (c = a.m_fixtureList; c; ) {
      var g = c.m_next;
      a.m_fixtureCount--;
      c.m_next = this.m_fixtureList;
      this.m_fixtureList = c;
      this.m_fixtureCount++;
      c.m_body = e;
      c = g;
    }
    b.m_fixtureCount = 0;
    var b = this,
      e = a;
    b.getWorldCenter();
    e.getWorldCenter();
    b.getLinearVelocity().copy();
    e.getLinearVelocity().copy();
    b.getAngularVelocity();
    e.getAngularVelocity();
    b.resetMassData();
    this.SynchronizeFixtures();
  };
  k.prototype.getMass = function () {
    return this.m_mass;
  };
  k.prototype.getInertia = function () {
    return this.m_I;
  };
  k.prototype.getMassData = function (a) {
    a.mass = this.m_mass;
    a.I = this.m_I;
    a.center.setV(this.m_sweep.localCenter);
  };
  k.prototype.setMassData = function (a) {
    A.assert(this.m_world.isLocked() == false);
    if (this.m_world.isLocked() != true)
      if (this.m_type == k.DYNAMIC_BODY) {
        this.m_invI = this.m_I = this.m_invMass = 0;
        this.m_mass = a.mass;
        if (this.m_mass <= 0) this.m_mass = 1;
        this.m_invMass = 1 / this.m_mass;
        if (a.I > 0 && (this.m_flags & k.e_fixedRotationFlag) == 0) {
          this.m_I =
            a.I -
            this.m_mass * (a.center.x * a.center.x + a.center.y * a.center.y);
          this.m_invI = 1 / this.m_I;
        }
        var c = this.m_sweep.c.copy();
        this.m_sweep.localCenter.setV(a.center);
        this.m_sweep.c0.setV(F.mulX(this.m_xf, this.m_sweep.localCenter));
        this.m_sweep.c.setV(this.m_sweep.c0);
        this.m_linearVelocity.x +=
          this.m_angularVelocity * -(this.m_sweep.c.y - c.y);
        this.m_linearVelocity.y +=
          this.m_angularVelocity * +(this.m_sweep.c.x - c.x);
      }
  };
  k.prototype.resetMassData = function () {
    this.m_invI = this.m_I = this.m_invMass = this.m_mass = 0;
    this.m_sweep.localCenter.setZero();
    if (!(this.m_type == k.STATIC_BODY || this.m_type == k.KINEMATIC_BODY)) {
      for (var a = y.make(0, 0), c = this.m_fixtureList; c; c = c.m_next)
        if (c.m_density != 0) {
          var g = c.getMassData();
          this.m_mass += g.mass;
          a.x += g.center.x * g.mass;
          a.y += g.center.y * g.mass;
          this.m_I += g.I;
        }
      if (this.m_mass > 0) {
        this.m_invMass = 1 / this.m_mass;
        a.x *= this.m_invMass;
        a.y *= this.m_invMass;
      } else this.m_invMass = this.m_mass = 1;
      if (this.m_I > 0 && (this.m_flags & k.e_fixedRotationFlag) == 0) {
        this.m_I -= this.m_mass * (a.x * a.x + a.y * a.y);
        this.m_I *= this.m_inertiaScale;
        A.assert(this.m_I > 0);
        this.m_invI = 1 / this.m_I;
      } else this.m_invI = this.m_I = 0;
      c = this.m_sweep.c.copy();
      this.m_sweep.localCenter.setV(a);
      this.m_sweep.c0.setV(F.mulX(this.m_xf, this.m_sweep.localCenter));
      this.m_sweep.c.setV(this.m_sweep.c0);
      this.m_linearVelocity.x +=
        this.m_angularVelocity * -(this.m_sweep.c.y - c.y);
      this.m_linearVelocity.y +=
        this.m_angularVelocity * +(this.m_sweep.c.x - c.x);
    }
  };
  k.prototype.getWorldPoint = function (a) {
    var c = this.m_xf.R;
    a = new y(c.col1.x * a.x + c.col2.x * a.y, c.col1.y * a.x + c.col2.y * a.y);
    a.x += this.m_xf.position.x;
    a.y += this.m_xf.position.y;
    return a;
  };
  k.prototype.getWorldVector = function (a) {
    return F.mulMV(this.m_xf.R, a);
  };
  k.prototype.getLocalPoint = function (a) {
    return F.mulXT(this.m_xf, a);
  };
  k.prototype.getLocalVector = function (a) {
    return F.mulTMV(this.m_xf.R, a);
  };
  k.prototype.getLinearVelocityFromWorldPoint = function (a) {
    return new y(
      this.m_linearVelocity.x -
        this.m_angularVelocity * (a.y - this.m_sweep.c.y),
      this.m_linearVelocity.y +
        this.m_angularVelocity * (a.x - this.m_sweep.c.x)
    );
  };
  k.prototype.getLinearVelocityFromLocalPoint = function (a) {
    var c = this.m_xf.R;
    a = new y(c.col1.x * a.x + c.col2.x * a.y, c.col1.y * a.x + c.col2.y * a.y);
    a.x += this.m_xf.position.x;
    a.y += this.m_xf.position.y;
    return new y(
      this.m_linearVelocity.x -
        this.m_angularVelocity * (a.y - this.m_sweep.c.y),
      this.m_linearVelocity.y +
        this.m_angularVelocity * (a.x - this.m_sweep.c.x)
    );
  };
  k.prototype.getLinearDamping = function () {
    return this.m_linearDamping;
  };
  k.prototype.setLinearDamping = function (a) {
    if (a === undefined) a = 0;
    this.m_linearDamping = a;
  };
  k.prototype.getAngularDamping = function () {
    return this.m_angularDamping;
  };
  k.prototype.setAngularDamping = function (a) {
    if (a === undefined) a = 0;
    this.m_angularDamping = a;
  };
  k.prototype.setType = function (a) {
    if (a === undefined) a = 0;
    if (this.m_type != a) {
      this.m_type = a;
      this.resetMassData();
      if (this.m_type == k.STATIC_BODY) {
        this.m_linearVelocity.setZero();
        this.m_angularVelocity = 0;
      }
      this.setAwake(true);
      this.m_force.setZero();
      this.m_torque = 0;
      for (a = this.m_contactList; a; a = a.next) a.contact.flagForFiltering();
    }
  };
  k.prototype.getType = function () {
    return this.m_type;
  };
  k.prototype.setBullet = function (a) {
    if (a) this.m_flags |= k.e_bulletFlag;
    else this.m_flags &= ~k.e_bulletFlag;
  };
  k.prototype.isBullet = function () {
    return (this.m_flags & k.e_bulletFlag) == k.e_bulletFlag;
  };
  k.prototype.setSleepingAllowed = function (a) {
    if (a) this.m_flags |= k.e_allowSleepFlag;
    else {
      this.m_flags &= ~k.e_allowSleepFlag;
      this.setAwake(true);
    }
  };
  k.prototype.setAwake = function (a) {
    if (a) {
      this.m_flags |= k.e_awakeFlag;
      this.m_sleepTime = 0;
    } else {
      this.m_flags &= ~k.e_awakeFlag;
      this.m_sleepTime = 0;
      this.m_linearVelocity.setZero();
      this.m_angularVelocity = 0;
      this.m_force.setZero();
      this.m_torque = 0;
    }
  };
  k.prototype.isAwake = function () {
    return (this.m_flags & k.e_awakeFlag) == k.e_awakeFlag;
  };
  k.prototype.setFixedRotation = function (a) {
    if (a) this.m_flags |= k.e_fixedRotationFlag;
    else this.m_flags &= ~k.e_fixedRotationFlag;
    this.resetMassData();
  };
  k.prototype.isFixedRotation = function () {
    return (this.m_flags & k.e_fixedRotationFlag) == k.e_fixedRotationFlag;
  };
  k.prototype.setActive = function (a) {
    if (a != this.isActive()) {
      var c;
      if (a) {
        this.m_flags |= k.e_activeFlag;
        a = this.m_world.m_contactManager.m_broadPhase;
        for (c = this.m_fixtureList; c; c = c.m_next)
          c.createProxy(a, this.m_xf);
      } else {
        this.m_flags &= ~k.e_activeFlag;
        a = this.m_world.m_contactManager.m_broadPhase;
        for (c = this.m_fixtureList; c; c = c.m_next) c.destroyProxy(a);
        for (a = this.m_contactList; a; ) {
          c = a;
          a = a.next;
          this.m_world.m_contactManager.destroy(c.contact);
        }
        this.m_contactList = null;
      }
    }
  };
  k.prototype.isActive = function () {
    return (this.m_flags & k.e_activeFlag) == k.e_activeFlag;
  };
  k.prototype.isSleepingAllowed = function () {
    return (this.m_flags & k.e_allowSleepFlag) == k.e_allowSleepFlag;
  };
  k.prototype.getFixtureList = function () {
    return this.m_fixtureList;
  };
  k.prototype.getJointList = function () {
    return this.m_jointList;
  };
  k.prototype.getControllerList = function () {
    return this.m_controllerList;
  };
  k.prototype.getContactList = function () {
    return this.m_contactList;
  };
  k.prototype.getNext = function () {
    return this.m_next;
  };
  k.prototype.getUserData = function () {
    return this.m_userData;
  };
  k.prototype.setUserData = function (a) {
    this.m_userData = a;
  };
  k.prototype.getWorld = function () {
    return this.m_world;
  };
  k.prototype.Body = function (a, c) {
    this.m_flags = 0;
    if (a.bullet) this.m_flags |= k.e_bulletFlag;
    if (a.fixedRotation) this.m_flags |= k.e_fixedRotationFlag;
    if (a.allowSleep) this.m_flags |= k.e_allowSleepFlag;
    if (a.awake) this.m_flags |= k.e_awakeFlag;
    if (a.active) this.m_flags |= k.e_activeFlag;
    this.m_world = c;
    this.m_xf.position.setV(a.position);
    this.m_xf.R.set(a.angle);
    this.m_sweep.localCenter.setZero();
    this.m_sweep.t0 = 1;
    this.m_sweep.a0 = this.m_sweep.a = a.angle;
    var g = this.m_xf.R,
      b = this.m_sweep.localCenter;
    this.m_sweep.c.x = g.col1.x * b.x + g.col2.x * b.y;
    this.m_sweep.c.y = g.col1.y * b.x + g.col2.y * b.y;
    this.m_sweep.c.x += this.m_xf.position.x;
    this.m_sweep.c.y += this.m_xf.position.y;
    this.m_sweep.c0.setV(this.m_sweep.c);
    this.m_contactList = this.m_controllerList = this.m_jointList = null;
    this.m_controllerCount = 0;
    this.m_next = this.m_prev = null;
    this.m_linearVelocity.setV(a.linearVelocity);
    this.m_angularVelocity = a.angularVelocity;
    this.m_linearDamping = a.linearDamping;
    this.m_angularDamping = a.angularDamping;
    this.m_force.set(0, 0);
    this.m_sleepTime = this.m_torque = 0;
    this.m_type = a.type;
    if (this.m_type == k.DYNAMIC_BODY) this.m_invMass = this.m_mass = 1;
    else this.m_invMass = this.m_mass = 0;
    this.m_invI = this.m_I = 0;
    this.m_inertiaScale = a.inertiaScale;
    this.m_userData = a.userData;
    this.m_fixtureList = null;
    this.m_fixtureCount = 0;
  };
  k.prototype.SynchronizeFixtures = function () {
    var a = k.s_xf1;
    a.R.set(this.m_sweep.a0);
    var c = a.R,
      g = this.m_sweep.localCenter;
    a.position.x = this.m_sweep.c0.x - (c.col1.x * g.x + c.col2.x * g.y);
    a.position.y = this.m_sweep.c0.y - (c.col1.y * g.x + c.col2.y * g.y);
    g = this.m_world.m_contactManager.m_broadPhase;
    for (c = this.m_fixtureList; c; c = c.m_next)
      c.Synchronize(g, a, this.m_xf);
  };
  k.prototype.SynchronizeTransform = function () {
    this.m_xf.R.set(this.m_sweep.a);
    var a = this.m_xf.R,
      c = this.m_sweep.localCenter;
    this.m_xf.position.x = this.m_sweep.c.x - (a.col1.x * c.x + a.col2.x * c.y);
    this.m_xf.position.y = this.m_sweep.c.y - (a.col1.y * c.x + a.col2.y * c.y);
  };
  k.prototype.shouldcollide = function (a) {
    if (this.m_type != k.DYNAMIC_BODY && a.m_type != k.DYNAMIC_BODY)
      return false;
    for (var c = this.m_jointList; c; c = c.next)
      if (c.other == a) if (c.joint.m_collideConnected == false) return false;
    return true;
  };
  k.prototype.advance = function (a) {
    if (a === undefined) a = 0;
    this.m_sweep.advance(a);
    this.m_sweep.c.setV(this.m_sweep.c0);
    this.m_sweep.a = this.m_sweep.a0;
    this.SynchronizeTransform();
  };
  Box2D.postDefs.push(function () {
    Box2D.Dynamics.Body.s_xf1 = new K();
    Box2D.Dynamics.Body.e_islandFlag = 1;
    Box2D.Dynamics.Body.e_awakeFlag = 2;
    Box2D.Dynamics.Body.e_allowSleepFlag = 4;
    Box2D.Dynamics.Body.e_bulletFlag = 8;
    Box2D.Dynamics.Body.e_fixedRotationFlag = 16;
    Box2D.Dynamics.Body.e_activeFlag = 32;
    Box2D.Dynamics.Body.STATIC_BODY = 0;
    Box2D.Dynamics.Body.KINEMATIC_BODY = 1;
    Box2D.Dynamics.Body.DYNAMIC_BODY = 2;
  });
  z.BodyDef = function () {
    this.position = new y();
    this.linearVelocity = new y();
  };
  z.prototype.BodyDef = function () {
    this.userData = null;
    this.position.set(0, 0);
    this.angle = 0;
    this.linearVelocity.set(0, 0);
    this.angularDamping = this.linearDamping = this.angularVelocity = 0;
    this.awake = this.allowSleep = true;
    this.bullet = this.fixedRotation = false;
    this.type = k.STATIC_BODY;
    this.active = true;
    this.inertiaScale = 1;
  };
  u.ContactFilter = function () {};
  u.prototype.shouldcollide = function (a, c) {
    var g = a.getFilterData(),
      b = c.getFilterData();
    if (g.groupIndex == b.groupIndex && g.groupIndex != 0)
      return g.groupIndex > 0;
    return (
      (g.maskBits & b.categoryBits) != 0 && (g.categoryBits & b.maskBits) != 0
    );
  };
  u.prototype.raycollide = function (a, c) {
    if (!a) return true;
    return this.shouldcollide(a instanceof S ? a : null, c);
  };
  Box2D.postDefs.push(function () {
    Box2D.Dynamics.ContactFilter.b2_defaultFilter = new u();
  });
  D.ContactImpulse = function () {
    this.normalImpulses = new Vector_a2j_Number(A.MAX_MANIFOLD_POINTS);
    this.tangentImpulses = new Vector_a2j_Number(A.MAX_MANIFOLD_POINTS);
  };
  H.ContactListener = function () {};
  H.prototype.beginContact = function () {};
  H.prototype.endContact = function () {};
  H.prototype.Presolve = function () {};
  H.prototype.Postsolve = function () {};
  Box2D.postDefs.push(function () {
    Box2D.Dynamics.ContactListener.b2_defaultListener = new H();
  });
  O.ContactManager = function () {};
  O.prototype.ContactManager = function () {
    this.m_world = null;
    this.m_contactCount = 0;
    this.m_contactFilter = u.b2_defaultFilter;
    this.m_contactListener = H.b2_defaultListener;
    this.m_contactFactory = new j(this.m_allocator);
    this.m_broadPhase = new B();
  };
  O.prototype.addPair = function (a, c) {
    var g = a instanceof S ? a : null,
      b = c instanceof S ? c : null,
      e = g.getBody(),
      f = b.getBody();
    if (e != f) {
      for (var m = f.getContactList(); m; ) {
        if (m.other == e) {
          var r = m.contact.getFixtureA(),
            s = m.contact.getFixtureB();
          if (r == g && s == b) return;
          if (r == b && s == g) return;
        }
        m = m.next;
      }
      if (f.shouldcollide(e) != false)
        if (this.m_contactFilter.shouldcollide(g, b) != false) {
          m = this.m_contactFactory.create(g, b);
          g = m.getFixtureA();
          b = m.getFixtureB();
          e = g.m_body;
          f = b.m_body;
          m.m_prev = null;
          m.m_next = this.m_world.m_contactList;
          if (this.m_world.m_contactList != null)
            this.m_world.m_contactList.m_prev = m;
          this.m_world.m_contactList = m;
          m.m_nodeA.contact = m;
          m.m_nodeA.other = f;
          m.m_nodeA.prev = null;
          m.m_nodeA.next = e.m_contactList;
          if (e.m_contactList != null) e.m_contactList.prev = m.m_nodeA;
          e.m_contactList = m.m_nodeA;
          m.m_nodeB.contact = m;
          m.m_nodeB.other = e;
          m.m_nodeB.prev = null;
          m.m_nodeB.next = f.m_contactList;
          if (f.m_contactList != null) f.m_contactList.prev = m.m_nodeB;
          f.m_contactList = m.m_nodeB;
          ++this.m_world.m_contactCount;
        }
    }
  };
  O.prototype.findNewContacts = function () {
    this.m_broadPhase.updatePairs(Box2D.generateCallback(this, this.addPair));
  };
  O.prototype.destroy = function (a) {
    var c = a.getFixtureA(),
      g = a.getFixtureB();
    c = c.getBody();
    g = g.getBody();
    a.isTouching() && this.m_contactListener.endContact(a);
    if (a.m_prev) a.m_prev.m_next = a.m_next;
    if (a.m_next) a.m_next.m_prev = a.m_prev;
    if (a == this.m_world.m_contactList) this.m_world.m_contactList = a.m_next;
    if (a.m_nodeA.prev) a.m_nodeA.prev.next = a.m_nodeA.next;
    if (a.m_nodeA.next) a.m_nodeA.next.prev = a.m_nodeA.prev;
    if (a.m_nodeA == c.m_contactList) c.m_contactList = a.m_nodeA.next;
    if (a.m_nodeB.prev) a.m_nodeB.prev.next = a.m_nodeB.next;
    if (a.m_nodeB.next) a.m_nodeB.next.prev = a.m_nodeB.prev;
    if (a.m_nodeB == g.m_contactList) g.m_contactList = a.m_nodeB.next;
    this.m_contactFactory.destroy(a);
    --this.m_contactCount;
  };
  O.prototype.collide = function () {
    for (var a = this.m_world.m_contactList; a; ) {
      var c = a.getFixtureA(),
        g = a.getFixtureB(),
        b = c.getBody(),
        e = g.getBody();
      if (b.isAwake() == false && e.isAwake() == false) a = a.getNext();
      else {
        if (a.m_flags & l.e_filterFlag) {
          if (e.shouldcollide(b) == false) {
            c = a;
            a = c.getNext();
            this.destroy(c);
            continue;
          }
          if (this.m_contactFilter.shouldcollide(c, g) == false) {
            c = a;
            a = c.getNext();
            this.destroy(c);
            continue;
          }
          a.m_flags &= ~l.e_filterFlag;
        }
        if (this.m_broadPhase.testOverlap(c.m_proxy, g.m_proxy) == false) {
          c = a;
          a = c.getNext();
          this.destroy(c);
        } else {
          a.Update(this.m_contactListener);
          a = a.getNext();
        }
      }
    }
  };
  Box2D.postDefs.push(function () {
    Box2D.Dynamics.ContactManager.s_evalCP = new p();
  });
  E.DebugDraw = function () {};
  E.prototype.DebugDraw = function () {};
  E.prototype.setFlags = function () {};
  E.prototype.getFlags = function () {};
  E.prototype.appendFlags = function () {};
  E.prototype.clearFlags = function () {};
  E.prototype.setSprite = function () {};
  E.prototype.getSprite = function () {};
  E.prototype.setDrawScale = function () {};
  E.prototype.getDrawScale = function () {};
  E.prototype.setLineThickness = function () {};
  E.prototype.getLineThickness = function () {};
  E.prototype.setAlpha = function () {};
  E.prototype.getAlpha = function () {};
  E.prototype.setFillAlpha = function () {};
  E.prototype.getFillAlpha = function () {};
  E.prototype.setXFormScale = function () {};
  E.prototype.getXFormScale = function () {};
  E.prototype.drawPolygon = function () {};
  E.prototype.drawSolidPolygon = function () {};
  E.prototype.drawCircle = function () {};
  E.prototype.drawSolidCircle = function () {};
  E.prototype.drawSegment = function () {};
  E.prototype.drawTransform = function () {};
  Box2D.postDefs.push(function () {
    Box2D.Dynamics.DebugDraw.SHAPE_BIT = 1;
    Box2D.Dynamics.DebugDraw.JOINT_BIT = 2;
    Box2D.Dynamics.DebugDraw.AABB_BIT = 4;
    Box2D.Dynamics.DebugDraw.PAIR_BIT = 8;
    Box2D.Dynamics.DebugDraw.CENTER_OF_MASS_BIT = 16;
    Box2D.Dynamics.DebugDraw.CONTROLLER_BIT = 32;
  });
  R.DestructionListener = function () {};
  R.prototype.sayGoodbyeJoint = function () {};
  R.prototype.sayGoodbyeFixture = function () {};
  N.FilterData = function () {
    this.categoryBits = 1;
    this.maskBits = 65535;
    this.groupIndex = 0;
  };
  N.prototype.copy = function () {
    var a = new N();
    a.categoryBits = this.categoryBits;
    a.maskBits = this.maskBits;
    a.groupIndex = this.groupIndex;
    return a;
  };
  S.Fixture = function () {
    this.m_filter = new N();
  };
  S.prototype.getType = function () {
    return this.m_shape.getType();
  };
  S.prototype.getShape = function () {
    return this.m_shape;
  };
  S.prototype.setSensor = function (a) {
    if (this.m_isSensor != a) {
      this.m_isSensor = a;
      if (this.m_body != null)
        for (a = this.m_body.getContactList(); a; ) {
          var c = a.contact,
            g = c.getFixtureA(),
            b = c.getFixtureB();
          if (g == this || b == this) c.setSensor(g.isSensor() || b.isSensor());
          a = a.next;
        }
    }
  };
  S.prototype.isSensor = function () {
    return this.m_isSensor;
  };
  S.prototype.setFilterData = function (a) {
    this.m_filter = a.copy();
    if (!this.m_body)
      for (a = this.m_body.getContactList(); a; ) {
        var c = a.contact,
          g = c.getFixtureA(),
          b = c.getFixtureB();
        if (g == this || b == this) c.flagForFiltering();
        a = a.next;
      }
  };
  S.prototype.getFilterData = function () {
    return this.m_filter.copy();
  };
  S.prototype.getBody = function () {
    return this.m_body;
  };
  S.prototype.getNext = function () {
    return this.m_next;
  };
  S.prototype.getUserData = function () {
    return this.m_userData;
  };
  S.prototype.setUserData = function (a) {
    this.m_userData = a;
  };
  S.prototype.testPoint = function (a) {
    return this.m_shape.testPoint(this.m_body.getTransform(), a);
  };
  S.prototype.rayCast = function (a, c) {
    return this.m_shape.rayCast(a, c, this.m_body.getTransform());
  };
  S.prototype.getMassData = function (a) {
    if (a === undefined) a = null;
    if (a == null) a = new I();
    this.m_shape.computeMass(a, this.m_density);
    return a;
  };
  S.prototype.setDensity = function (a) {
    if (a === undefined) a = 0;
    this.m_density = a;
  };
  S.prototype.getDensity = function () {
    return this.m_density;
  };
  S.prototype.getFriction = function () {
    return this.m_friction;
  };
  S.prototype.setFriction = function (a) {
    if (a === undefined) a = 0;
    this.m_friction = a;
  };
  S.prototype.getRestitution = function () {
    return this.m_restitution;
  };
  S.prototype.setRestitution = function (a) {
    if (a === undefined) a = 0;
    this.m_restitution = a;
  };
  S.prototype.getAABB = function () {
    return this.m_aabb;
  };
  S.prototype.Fixture = function () {
    this.m_aabb = new U();
    this.m_shape = this.m_next = this.m_body = this.m_userData = null;
    this.m_restitution = this.m_friction = this.m_density = 0;
  };
  S.prototype.create = function (a, c, g) {
    this.m_userData = g.userData;
    this.m_friction = g.friction;
    this.m_restitution = g.restitution;
    this.m_body = a;
    this.m_next = null;
    this.m_filter = g.filter.copy();
    this.m_isSensor = g.isSensor;
    this.m_shape = g.shape.copy();
    this.m_density = g.density;
  };
  S.prototype.destroy = function () {
    this.m_shape = null;
  };
  S.prototype.createProxy = function (a, c) {
    this.m_shape.computeAABB(this.m_aabb, c);
    this.m_proxy = a.createProxy(this.m_aabb, this);
  };
  S.prototype.destroyProxy = function (a) {
    if (this.m_proxy != null) {
      a.destroyProxy(this.m_proxy);
      this.m_proxy = null;
    }
  };
  S.prototype.Synchronize = function (a, c, g) {
    if (this.m_proxy) {
      var b = new U(),
        e = new U();
      this.m_shape.computeAABB(b, c);
      this.m_shape.computeAABB(e, g);
      this.m_aabb.combine(b, e);
      c = F.subtractVV(g.position, c.position);
      a.moveProxy(this.m_proxy, this.m_aabb, c);
    }
  };
  aa.FixtureDef = function () {
    this.filter = new N();
  };
  aa.prototype.FixtureDef = function () {
    this.userData = this.shape = null;
    this.friction = 0.2;
    this.density = this.restitution = 0;
    this.filter.categoryBits = 1;
    this.filter.maskBits = 65535;
    this.filter.groupIndex = 0;
    this.isSensor = false;
  };
  Z.Island = function () {};
  Z.prototype.Island = function () {
    this.m_bodies = new Vector();
    this.m_contacts = new Vector();
    this.m_joints = new Vector();
  };
  Z.prototype.initialize = function (a, c, g, b, e, f) {
    if (a === undefined) a = 0;
    if (c === undefined) c = 0;
    if (g === undefined) g = 0;
    var m = 0;
    this.m_bodyCapacity = a;
    this.m_contactCapacity = c;
    this.m_jointCapacity = g;
    this.m_jointCount = this.m_contactCount = this.m_bodyCount = 0;
    this.m_allocator = b;
    this.m_listener = e;
    this.m_contactsolver = f;
    for (m = this.m_bodies.length; m < a; m++) this.m_bodies[m] = null;
    for (m = this.m_contacts.length; m < c; m++) this.m_contacts[m] = null;
    for (m = this.m_joints.length; m < g; m++) this.m_joints[m] = null;
  };
  Z.prototype.clear = function () {
    this.m_jointCount = this.m_contactCount = this.m_bodyCount = 0;
  };
  Z.prototype.solve = function (a, c, g) {
    var b = 0,
      e = 0,
      f;
    for (b = 0; b < this.m_bodyCount; ++b) {
      e = this.m_bodies[b];
      if (e.getType() == k.DYNAMIC_BODY) {
        e.m_linearVelocity.x += a.dt * (c.x + e.m_invMass * e.m_force.x);
        e.m_linearVelocity.y += a.dt * (c.y + e.m_invMass * e.m_force.y);
        e.m_angularVelocity += a.dt * e.m_invI * e.m_torque;
        e.m_linearVelocity.multiply(
          F.clamp(1 - a.dt * e.m_linearDamping, 0, 1)
        );
        e.m_angularVelocity *= F.clamp(1 - a.dt * e.m_angularDamping, 0, 1);
      }
    }
    this.m_contactsolver.initialize(
      a,
      this.m_contacts,
      this.m_contactCount,
      this.m_allocator
    );
    c = this.m_contactsolver;
    c.initVelocityConstraints(a);
    for (b = 0; b < this.m_jointCount; ++b) {
      f = this.m_joints[b];
      f.initVelocityConstraints(a);
    }
    for (b = 0; b < a.velocityIterations; ++b) {
      for (e = 0; e < this.m_jointCount; ++e) {
        f = this.m_joints[e];
        f.solveVelocityConstraints(a);
      }
      c.solveVelocityConstraints();
    }
    for (b = 0; b < this.m_jointCount; ++b) {
      f = this.m_joints[b];
      f.finalizeVelocityConstraints();
    }
    c.finalizeVelocityConstraints();
    for (b = 0; b < this.m_bodyCount; ++b) {
      e = this.m_bodies[b];
      if (e.getType() != k.STATIC_BODY) {
        var m = a.dt * e.m_linearVelocity.x,
          r = a.dt * e.m_linearVelocity.y;
        if (m * m + r * r > A.MAX_TRANSLATIONSquared) {
          e.m_linearVelocity.normalize();
          e.m_linearVelocity.x *= A.MAX_TRANSLATION * a.inv_dt;
          e.m_linearVelocity.y *= A.MAX_TRANSLATION * a.inv_dt;
        }
        m = a.dt * e.m_angularVelocity;
        if (m * m > A.MAX_ROTATIONSquared)
          e.m_angularVelocity =
            e.m_angularVelocity < 0
              ? -A.MAX_ROTATION * a.inv_dt
              : A.MAX_ROTATION * a.inv_dt;
        e.m_sweep.c0.setV(e.m_sweep.c);
        e.m_sweep.a0 = e.m_sweep.a;
        e.m_sweep.c.x += a.dt * e.m_linearVelocity.x;
        e.m_sweep.c.y += a.dt * e.m_linearVelocity.y;
        e.m_sweep.a += a.dt * e.m_angularVelocity;
        e.SynchronizeTransform();
      }
    }
    for (b = 0; b < a.positionIterations; ++b) {
      m = c.solvePositionConstraints(A.CONTACT_BAUMGARTE);
      r = true;
      for (e = 0; e < this.m_jointCount; ++e) {
        f = this.m_joints[e];
        f = f.solvePositionConstraints(A.CONTACT_BAUMGARTE);
        r = r && f;
      }
      if (m && r) break;
    }
    this.report(c.m_constraints);
    if (g) {
      g = Number.MAX_VALUE;
      c = A.LINEAR_SLEEP_TOLERANCE * A.LINEAR_SLEEP_TOLERANCE;
      m = A.ANGULAR_SLEEP_TOLERANCE * A.ANGULAR_SLEEP_TOLERANCE;
      for (b = 0; b < this.m_bodyCount; ++b) {
        e = this.m_bodies[b];
        if (e.getType() != k.STATIC_BODY) {
          if ((e.m_flags & k.e_allowSleepFlag) == 0) g = e.m_sleepTime = 0;
          if (
            (e.m_flags & k.e_allowSleepFlag) == 0 ||
            e.m_angularVelocity * e.m_angularVelocity > m ||
            F.dot(e.m_linearVelocity, e.m_linearVelocity) > c
          )
            g = e.m_sleepTime = 0;
          else {
            e.m_sleepTime += a.dt;
            g = F.min(g, e.m_sleepTime);
          }
        }
      }
      if (g >= A.TIME_TO_SLEEP)
        for (b = 0; b < this.m_bodyCount; ++b) {
          e = this.m_bodies[b];
          e.setAwake(false);
        }
    }
  };
  Z.prototype.solveTOI = function (a) {
    var c = 0,
      g = 0;
    this.m_contactsolver.initialize(
      a,
      this.m_contacts,
      this.m_contactCount,
      this.m_allocator
    );
    var b = this.m_contactsolver;
    for (c = 0; c < this.m_jointCount; ++c)
      this.m_joints[c].initVelocityConstraints(a);
    for (c = 0; c < a.velocityIterations; ++c) {
      b.solveVelocityConstraints();
      for (g = 0; g < this.m_jointCount; ++g)
        this.m_joints[g].solveVelocityConstraints(a);
    }
    for (c = 0; c < this.m_bodyCount; ++c) {
      g = this.m_bodies[c];
      if (g.getType() != k.STATIC_BODY) {
        var e = a.dt * g.m_linearVelocity.x,
          f = a.dt * g.m_linearVelocity.y;
        if (e * e + f * f > A.MAX_TRANSLATIONSquared) {
          g.m_linearVelocity.normalize();
          g.m_linearVelocity.x *= A.MAX_TRANSLATION * a.inv_dt;
          g.m_linearVelocity.y *= A.MAX_TRANSLATION * a.inv_dt;
        }
        e = a.dt * g.m_angularVelocity;
        if (e * e > A.MAX_ROTATIONSquared)
          g.m_angularVelocity =
            g.m_angularVelocity < 0
              ? -A.MAX_ROTATION * a.inv_dt
              : A.MAX_ROTATION * a.inv_dt;
        g.m_sweep.c0.setV(g.m_sweep.c);
        g.m_sweep.a0 = g.m_sweep.a;
        g.m_sweep.c.x += a.dt * g.m_linearVelocity.x;
        g.m_sweep.c.y += a.dt * g.m_linearVelocity.y;
        g.m_sweep.a += a.dt * g.m_angularVelocity;
        g.SynchronizeTransform();
      }
    }
    for (c = 0; c < a.positionIterations; ++c) {
      e = b.solvePositionConstraints(0.75);
      f = true;
      for (g = 0; g < this.m_jointCount; ++g) {
        var m = this.m_joints[g].solvePositionConstraints(A.CONTACT_BAUMGARTE);
        f = f && m;
      }
      if (e && f) break;
    }
    this.report(b.m_constraints);
  };
  Z.prototype.report = function (a) {
    if (this.m_listener != null)
      for (var c = 0; c < this.m_contactCount; ++c) {
        for (
          var g = this.m_contacts[c], b = a[c], e = 0;
          e < b.pointCount;
          ++e
        ) {
          Z.s_impulse.normalImpulses[e] = b.points[e].normalImpulse;
          Z.s_impulse.tangentImpulses[e] = b.points[e].tangentImpulse;
        }
        this.m_listener.Postsolve(g, Z.s_impulse);
      }
  };
  Z.prototype.addBody = function (a) {
    a.m_islandIndex = this.m_bodyCount;
    this.m_bodies[this.m_bodyCount++] = a;
  };
  Z.prototype.addContact = function (a) {
    this.m_contacts[this.m_contactCount++] = a;
  };
  Z.prototype.addJoint = function (a) {
    this.m_joints[this.m_jointCount++] = a;
  };
  Box2D.postDefs.push(function () {
    Box2D.Dynamics.Island.s_impulse = new D();
  });
  d.Timestep = function () {};
  d.prototype.set = function (a) {
    this.dt = a.dt;
    this.inv_dt = a.inv_dt;
    this.positionIterations = a.positionIterations;
    this.velocityIterations = a.velocityIterations;
    this.warmStarting = a.warmStarting;
  };
  h.World = function () {
    this.s_stack = new Vector();
    this.m_contactManager = new O();
    this.m_contactsolver = new o();
    this.m_island = new Z();
  };
  h.prototype.World = function (a, c) {
    this.m_controllerList = this.m_jointList = this.m_contactList = this.m_bodyList = this.m_debugDraw = this.m_destructionListener = null;
    this.m_controllerCount = this.m_jointCount = this.m_contactCount = this.m_bodyCount = 0;
    h.m_warmStarting = true;
    h.m_continuousPhysics = true;
    this.m_allowSleep = c;
    this.m_gravity = a;
    this.m_inv_dt0 = 0;
    this.m_contactManager.m_world = this;
    this.m_groundBody = this.createBody(new z());
  };
  h.prototype.setDestructionListener = function (a) {
    this.m_destructionListener = a;
  };
  h.prototype.setContactFilter = function (a) {
    this.m_contactManager.m_contactFilter = a;
  };
  h.prototype.setContactListener = function (a) {
    this.m_contactManager.m_contactListener = a;
  };
  h.prototype.setDebugDraw = function (a) {
    this.m_debugDraw = a;
  };
  h.prototype.setBroadPhase = function (a) {
    var c = this.m_contactManager.m_broadPhase;
    this.m_contactManager.m_broadPhase = a;
    for (var g = this.m_bodyList; g; g = g.m_next)
      for (var b = g.m_fixtureList; b; b = b.m_next)
        b.m_proxy = a.createProxy(c.getFatAABB(b.m_proxy), b);
  };
  h.prototype.validate = function () {
    this.m_contactManager.m_broadPhase.validate();
  };
  h.prototype.getProxyCount = function () {
    return this.m_contactManager.m_broadPhase.getProxyCount();
  };
  h.prototype.createBody = function (a) {
    if (this.isLocked() == true) return null;
    a = new k(a, this);
    a.m_prev = null;
    if ((a.m_next = this.m_bodyList)) this.m_bodyList.m_prev = a;
    this.m_bodyList = a;
    ++this.m_bodyCount;
    return a;
  };
  h.prototype.destroyBody = function (a) {
    if (this.isLocked() != true) {
      for (var c = a.m_jointList; c; ) {
        var g = c;
        c = c.next;
        this.m_destructionListener &&
          this.m_destructionListener.sayGoodbyeJoint(g.joint);
        this.destroyJoint(g.joint);
      }
      for (c = a.m_controllerList; c; ) {
        g = c;
        c = c.nextController;
        g.controller.removeBody(a);
      }
      for (c = a.m_contactList; c; ) {
        g = c;
        c = c.next;
        this.m_contactManager.destroy(g.contact);
      }
      a.m_contactList = null;
      for (c = a.m_fixtureList; c; ) {
        g = c;
        c = c.m_next;
        this.m_destructionListener &&
          this.m_destructionListener.sayGoodbyeFixture(g);
        g.destroyProxy(this.m_contactManager.m_broadPhase);
        g.destroy();
      }
      a.m_fixtureList = null;
      a.m_fixtureCount = 0;
      if (a.m_prev) a.m_prev.m_next = a.m_next;
      if (a.m_next) a.m_next.m_prev = a.m_prev;
      if (a == this.m_bodyList) this.m_bodyList = a.m_next;
      --this.m_bodyCount;
    }
  };
  h.prototype.createJoint = function (a) {
    var c = q.create(a, null);
    c.m_prev = null;
    if ((c.m_next = this.m_jointList)) this.m_jointList.m_prev = c;
    this.m_jointList = c;
    ++this.m_jointCount;
    c.m_edgeA.joint = c;
    c.m_edgeA.other = c.m_bodyB;
    c.m_edgeA.prev = null;
    if ((c.m_edgeA.next = c.m_bodyA.m_jointList))
      c.m_bodyA.m_jointList.prev = c.m_edgeA;
    c.m_bodyA.m_jointList = c.m_edgeA;
    c.m_edgeB.joint = c;
    c.m_edgeB.other = c.m_bodyA;
    c.m_edgeB.prev = null;
    if ((c.m_edgeB.next = c.m_bodyB.m_jointList))
      c.m_bodyB.m_jointList.prev = c.m_edgeB;
    c.m_bodyB.m_jointList = c.m_edgeB;
    var g = a.bodyA,
      b = a.bodyB;
    if (a.collideConnected == false)
      for (a = b.getContactList(); a; ) {
        a.other == g && a.contact.flagForFiltering();
        a = a.next;
      }
    return c;
  };
  h.prototype.destroyJoint = function (a) {
    var c = a.m_collideConnected;
    if (a.m_prev) a.m_prev.m_next = a.m_next;
    if (a.m_next) a.m_next.m_prev = a.m_prev;
    if (a == this.m_jointList) this.m_jointList = a.m_next;
    var g = a.m_bodyA,
      b = a.m_bodyB;
    g.setAwake(true);
    b.setAwake(true);
    if (a.m_edgeA.prev) a.m_edgeA.prev.next = a.m_edgeA.next;
    if (a.m_edgeA.next) a.m_edgeA.next.prev = a.m_edgeA.prev;
    if (a.m_edgeA == g.m_jointList) g.m_jointList = a.m_edgeA.next;
    a.m_edgeA.prev = null;
    a.m_edgeA.next = null;
    if (a.m_edgeB.prev) a.m_edgeB.prev.next = a.m_edgeB.next;
    if (a.m_edgeB.next) a.m_edgeB.next.prev = a.m_edgeB.prev;
    if (a.m_edgeB == b.m_jointList) b.m_jointList = a.m_edgeB.next;
    a.m_edgeB.prev = null;
    a.m_edgeB.next = null;
    q.destroy(a, null);
    --this.m_jointCount;
    if (c == false)
      for (a = b.getContactList(); a; ) {
        a.other == g && a.contact.flagForFiltering();
        a = a.next;
      }
  };
  h.prototype.addController = function (a) {
    a.m_next = this.m_controllerList;
    a.m_prev = null;
    this.m_controllerList = a;
    a.m_world = this;
    this.m_controllerCount++;
    return a;
  };
  h.prototype.removeController = function (a) {
    if (a.m_prev) a.m_prev.m_next = a.m_next;
    if (a.m_next) a.m_next.m_prev = a.m_prev;
    if (this.m_controllerList == a) this.m_controllerList = a.m_next;
    this.m_controllerCount--;
  };
  h.prototype.createController = function (a) {
    if (a.m_world != this)
      throw Error("Controller can only be a member of one world");
    a.m_next = this.m_controllerList;
    a.m_prev = null;
    if (this.m_controllerList) this.m_controllerList.m_prev = a;
    this.m_controllerList = a;
    ++this.m_controllerCount;
    a.m_world = this;
    return a;
  };
  h.prototype.destroyController = function (a) {
    a.clear();
    if (a.m_next) a.m_next.m_prev = a.m_prev;
    if (a.m_prev) a.m_prev.m_next = a.m_next;
    if (a == this.m_controllerList) this.m_controllerList = a.m_next;
    --this.m_controllerCount;
  };
  h.prototype.setWarmStarting = function (a) {
    h.m_warmStarting = a;
  };
  h.prototype.setContinuousPhysics = function (a) {
    h.m_continuousPhysics = a;
  };
  h.prototype.getBodyCount = function () {
    return this.m_bodyCount;
  };
  h.prototype.getJointCount = function () {
    return this.m_jointCount;
  };
  h.prototype.getContactCount = function () {
    return this.m_contactCount;
  };
  h.prototype.setGravity = function (a) {
    this.m_gravity = a;
  };
  h.prototype.getGravity = function () {
    return this.m_gravity;
  };
  h.prototype.getGroundBody = function () {
    return this.m_groundBody;
  };
  h.prototype.step = function (a, c, g) {
    if (a === undefined) a = 0;
    if (c === undefined) c = 0;
    if (g === undefined) g = 0;
    if (this.m_flags & h.NEW_FIXTURE) {
      this.m_contactManager.findNewContacts();
      this.m_flags &= ~h.NEW_FIXTURE;
    }
    this.m_flags |= h.LOCKED;
    var b = h.s_timestep2;
    b.dt = a;
    b.velocityIterations = c;
    b.positionIterations = g;
    b.inv_dt = a > 0 ? 1 / a : 0;
    b.dtRatio = this.m_inv_dt0 * a;
    b.warmStarting = h.m_warmStarting;
    this.m_contactManager.collide();
    b.dt > 0 && this.solve(b);
    h.m_continuousPhysics && b.dt > 0 && this.solveTOI(b);
    if (b.dt > 0) this.m_inv_dt0 = b.inv_dt;
    this.m_flags &= ~h.LOCKED;
  };
  h.prototype.clearForces = function () {
    for (var a = this.m_bodyList; a; a = a.m_next) {
      a.m_force.setZero();
      a.m_torque = 0;
    }
  };
  h.prototype.drawDebugData = function () {
    if (this.m_debugDraw != null) {
      this.m_debugDraw.m_sprite.graphics.clear();
      var a = this.m_debugDraw.getFlags(),
        c,
        g,
        b;
      new y();
      new y();
      new y();
      var e;
      new U();
      new U();
      e = [new y(), new y(), new y(), new y()];
      var f = new w(0, 0, 0);
      if (a & E.SHAPE_BIT)
        for (c = this.m_bodyList; c; c = c.m_next) {
          e = c.m_xf;
          for (g = c.getFixtureList(); g; g = g.m_next) {
            b = g.getShape();
            if (c.isActive() == false) f.set(0.5, 0.5, 0.3);
            else if (c.getType() == k.STATIC_BODY) f.set(0.5, 0.9, 0.5);
            else if (c.getType() == k.KINEMATIC_BODY) f.set(0.5, 0.5, 0.9);
            else
              c.isAwake() == false
                ? f.set(0.6, 0.6, 0.6)
                : f.set(0.9, 0.7, 0.7);
            this.drawShape(b, e, f);
          }
        }
      if (a & E.JOINT_BIT)
        for (c = this.m_jointList; c; c = c.m_next) this.drawJoint(c);
      if (a & E.CONTROLLER_BIT)
        for (c = this.m_controllerList; c; c = c.m_next)
          c.draw(this.m_debugDraw);
      if (a & E.PAIR_BIT) {
        f.set(0.3, 0.9, 0.9);
        for (c = this.m_contactManager.m_contactList; c; c = c.getNext()) {
          b = c.getFixtureA();
          g = c.getFixtureB();
          b = b.getAABB().getCenter();
          g = g.getAABB().getCenter();
          this.m_debugDraw.drawSegment(b, g, f);
        }
      }
      if (a & E.AABB_BIT) {
        b = this.m_contactManager.m_broadPhase;
        e = [new y(), new y(), new y(), new y()];
        for (c = this.m_bodyList; c; c = c.getNext())
          if (c.isActive() != false)
            for (g = c.getFixtureList(); g; g = g.getNext()) {
              var m = b.getFatAABB(g.m_proxy);
              e[0].set(m.lowerBound.x, m.lowerBound.y);
              e[1].set(m.upperBound.x, m.lowerBound.y);
              e[2].set(m.upperBound.x, m.upperBound.y);
              e[3].set(m.lowerBound.x, m.upperBound.y);
              this.m_debugDraw.drawPolygon(e, 4, f);
            }
      }
      if (a & E.CENTER_OF_MASS_BIT)
        for (c = this.m_bodyList; c; c = c.m_next) {
          e = h.s_xf;
          e.R = c.m_xf.R;
          e.position = c.getWorldCenter();
          this.m_debugDraw.drawTransform(e);
        }
    }
  };
  h.prototype.queryAABB = function (a, c) {
    var g = this.m_contactManager.m_broadPhase;
    g.query(function (b) {
      return a(g.getUserData(b));
    }, c);
  };
  h.prototype.queryShape = function (a, c, g) {
    if (g === undefined) g = null;
    if (g == null) {
      g = new K();
      g.setIdentity();
    }
    var b = this.m_contactManager.m_broadPhase,
      e = new U();
    c.computeAABB(e, g);
    b.query(function (f) {
      f = b.getUserData(f) instanceof S ? b.getUserData(f) : null;
      if (Y.testOverlap(c, g, f.getShape(), f.getBody().getTransform()))
        return a(f);
      return true;
    }, e);
  };
  h.prototype.queryPoint = function (a, c) {
    var g = this.m_contactManager.m_broadPhase,
      b = new U();
    b.lowerBound.set(c.x - A.LINEAR_SLOP, c.y - A.LINEAR_SLOP);
    b.upperBound.set(c.x + A.LINEAR_SLOP, c.y + A.LINEAR_SLOP);
    g.query(function (e) {
      e = g.getUserData(e) instanceof S ? g.getUserData(e) : null;
      if (e.testPoint(c)) return a(e);
      return true;
    }, b);
  };
  h.prototype.rayCast = function (a, c, g) {
    var b = this.m_contactManager.m_broadPhase,
      e = new V(),
      f = new Q(c, g);
    b.rayCast(function (m, r) {
      var s = b.getUserData(r);
      s = s instanceof S ? s : null;
      if (s.rayCast(e, m)) {
        var v = e.fraction,
          t = new y((1 - v) * c.x + v * g.x, (1 - v) * c.y + v * g.y);
        return a(s, t, e.normal, v);
      }
      return m.maxFraction;
    }, f);
  };
  h.prototype.rayCastOne = function (a, c) {
    var g;
    this.rayCast(
      function (b, e, f, m) {
        if (m === undefined) m = 0;
        g = b;
        return m;
      },
      a,
      c
    );
    return g;
  };
  h.prototype.rayCastAll = function (a, c) {
    var g = new Vector();
    this.rayCast(
      function (b) {
        g[g.length] = b;
        return 1;
      },
      a,
      c
    );
    return g;
  };
  h.prototype.getBodyList = function () {
    return this.m_bodyList;
  };
  h.prototype.getJointList = function () {
    return this.m_jointList;
  };
  h.prototype.getContactList = function () {
    return this.m_contactList;
  };
  h.prototype.isLocked = function () {
    return (this.m_flags & h.LOCKED) > 0;
  };
  h.prototype.solve = function (a) {
    for (var c, g = this.m_controllerList; g; g = g.m_next) g.step(a);
    g = this.m_island;
    g.initialize(
      this.m_bodyCount,
      this.m_contactCount,
      this.m_jointCount,
      null,
      this.m_contactManager.m_contactListener,
      this.m_contactsolver
    );
    for (c = this.m_bodyList; c; c = c.m_next) c.m_flags &= ~k.e_islandFlag;
    for (var b = this.m_contactList; b; b = b.m_next)
      b.m_flags &= ~l.e_islandFlag;
    for (b = this.m_jointList; b; b = b.m_next) b.m_islandFlag = false;
    parseInt(this.m_bodyCount);
    b = this.s_stack;
    for (var e = this.m_bodyList; e; e = e.m_next)
      if (!(e.m_flags & k.e_islandFlag))
        if (!(e.isAwake() == false || e.isActive() == false))
          if (e.getType() != k.STATIC_BODY) {
            g.clear();
            var f = 0;
            b[f++] = e;
            for (e.m_flags |= k.e_islandFlag; f > 0; ) {
              c = b[--f];
              g.addBody(c);
              c.isAwake() == false && c.setAwake(true);
              if (c.getType() != k.STATIC_BODY) {
                for (var m, r = c.m_contactList; r; r = r.next)
                  if (!(r.contact.m_flags & l.e_islandFlag))
                    if (
                      !(
                        r.contact.isSensor() == true ||
                        r.contact.isEnabled() == false ||
                        r.contact.isTouching() == false
                      )
                    ) {
                      g.addContact(r.contact);
                      r.contact.m_flags |= l.e_islandFlag;
                      m = r.other;
                      if (!(m.m_flags & k.e_islandFlag)) {
                        b[f++] = m;
                        m.m_flags |= k.e_islandFlag;
                      }
                    }
                for (c = c.m_jointList; c; c = c.next)
                  if (c.joint.m_islandFlag != true) {
                    m = c.other;
                    if (m.isActive() != false) {
                      g.addJoint(c.joint);
                      c.joint.m_islandFlag = true;
                      if (!(m.m_flags & k.e_islandFlag)) {
                        b[f++] = m;
                        m.m_flags |= k.e_islandFlag;
                      }
                    }
                  }
              }
            }
            g.solve(a, this.m_gravity, this.m_allowSleep);
            for (f = 0; f < g.m_bodyCount; ++f) {
              c = g.m_bodies[f];
              if (c.getType() == k.STATIC_BODY) c.m_flags &= ~k.e_islandFlag;
            }
          }
    for (f = 0; f < b.length; ++f) {
      if (!b[f]) break;
      b[f] = null;
    }
    for (c = this.m_bodyList; c; c = c.m_next)
      c.isAwake() == false ||
        c.isActive() == false ||
        (c.getType() != k.STATIC_BODY && c.SynchronizeFixtures());
    this.m_contactManager.findNewContacts();
  };
  h.prototype.solveTOI = function (a) {
    var c,
      g,
      b,
      e = this.m_island;
    e.initialize(
      this.m_bodyCount,
      A.MAX_TOI_CONTACTS_PER_ISLAND,
      A.MAX_TOI_JOINTS_PER_ISLAND,
      null,
      this.m_contactManager.m_contactListener,
      this.m_contactsolver
    );
    var f = h.s_queue;
    for (c = this.m_bodyList; c; c = c.m_next) {
      c.m_flags &= ~k.e_islandFlag;
      c.m_sweep.t0 = 0;
    }
    for (b = this.m_contactList; b; b = b.m_next)
      b.m_flags &= ~(l.e_toiFlag | l.e_islandFlag);
    for (b = this.m_jointList; b; b = b.m_next) b.m_islandFlag = false;
    for (;;) {
      var m = null,
        r = 1;
      for (b = this.m_contactList; b; b = b.m_next)
        if (
          !(
            b.isSensor() == true ||
            b.isEnabled() == false ||
            b.isContinuous() == false
          )
        ) {
          c = 1;
          if (b.m_flags & l.e_toiFlag) c = b.m_toi;
          else {
            c = b.m_fixtureA;
            g = b.m_fixtureB;
            c = c.m_body;
            g = g.m_body;
            if (
              (c.getType() != k.DYNAMIC_BODY || c.isAwake() == false) &&
              (g.getType() != k.DYNAMIC_BODY || g.isAwake() == false)
            )
              continue;
            var s = c.m_sweep.t0;
            if (c.m_sweep.t0 < g.m_sweep.t0) {
              s = g.m_sweep.t0;
              c.m_sweep.advance(s);
            } else if (g.m_sweep.t0 < c.m_sweep.t0) {
              s = c.m_sweep.t0;
              g.m_sweep.advance(s);
            }
            c = b.computeTOI(c.m_sweep, g.m_sweep);
            A.assert(0 <= c && c <= 1);
            if (c > 0 && c < 1) {
              c = (1 - c) * s + c;
              if (c > 1) c = 1;
            }
            b.m_toi = c;
            b.m_flags |= l.e_toiFlag;
          }
          if (Number.MIN_VALUE < c && c < r) {
            m = b;
            r = c;
          }
        }
      if (m == null || 1 - 100 * Number.MIN_VALUE < r) break;
      c = m.m_fixtureA;
      g = m.m_fixtureB;
      c = c.m_body;
      g = g.m_body;
      h.s_backupA.set(c.m_sweep);
      h.s_backupB.set(g.m_sweep);
      c.advance(r);
      g.advance(r);
      m.Update(this.m_contactManager.m_contactListener);
      m.m_flags &= ~l.e_toiFlag;
      if (m.isSensor() == true || m.isEnabled() == false) {
        c.m_sweep.set(h.s_backupA);
        g.m_sweep.set(h.s_backupB);
        c.SynchronizeTransform();
        g.SynchronizeTransform();
      } else if (m.isTouching() != false) {
        c = c;
        if (c.getType() != k.DYNAMIC_BODY) c = g;
        e.clear();
        m = b = 0;
        f[b + m++] = c;
        for (c.m_flags |= k.e_islandFlag; m > 0; ) {
          c = f[b++];
          --m;
          e.addBody(c);
          c.isAwake() == false && c.setAwake(true);
          if (c.getType() == k.DYNAMIC_BODY) {
            for (g = c.m_contactList; g; g = g.next) {
              if (e.m_contactCount == e.m_contactCapacity) break;
              if (!(g.contact.m_flags & l.e_islandFlag))
                if (
                  !(
                    g.contact.isSensor() == true ||
                    g.contact.isEnabled() == false ||
                    g.contact.isTouching() == false
                  )
                ) {
                  e.addContact(g.contact);
                  g.contact.m_flags |= l.e_islandFlag;
                  s = g.other;
                  if (!(s.m_flags & k.e_islandFlag)) {
                    if (s.getType() != k.STATIC_BODY) {
                      s.advance(r);
                      s.setAwake(true);
                    }
                    f[b + m] = s;
                    ++m;
                    s.m_flags |= k.e_islandFlag;
                  }
                }
            }
            for (c = c.m_jointList; c; c = c.next)
              if (e.m_jointCount != e.m_jointCapacity)
                if (c.joint.m_islandFlag != true) {
                  s = c.other;
                  if (s.isActive() != false) {
                    e.addJoint(c.joint);
                    c.joint.m_islandFlag = true;
                    if (!(s.m_flags & k.e_islandFlag)) {
                      if (s.getType() != k.STATIC_BODY) {
                        s.advance(r);
                        s.setAwake(true);
                      }
                      f[b + m] = s;
                      ++m;
                      s.m_flags |= k.e_islandFlag;
                    }
                  }
                }
          }
        }
        b = h.s_timestep;
        b.warmStarting = false;
        b.dt = (1 - r) * a.dt;
        b.inv_dt = 1 / b.dt;
        b.dtRatio = 0;
        b.velocityIterations = a.velocityIterations;
        b.positionIterations = a.positionIterations;
        e.solveTOI(b);
        for (r = r = 0; r < e.m_bodyCount; ++r) {
          c = e.m_bodies[r];
          c.m_flags &= ~k.e_islandFlag;
          if (c.isAwake() != false)
            if (c.getType() == k.DYNAMIC_BODY) {
              c.SynchronizeFixtures();
              for (g = c.m_contactList; g; g = g.next)
                g.contact.m_flags &= ~l.e_toiFlag;
            }
        }
        for (r = 0; r < e.m_contactCount; ++r) {
          b = e.m_contacts[r];
          b.m_flags &= ~(l.e_toiFlag | l.e_islandFlag);
        }
        for (r = 0; r < e.m_jointCount; ++r) {
          b = e.m_joints[r];
          b.m_islandFlag = false;
        }
        this.m_contactManager.findNewContacts();
      }
    }
  };
  h.prototype.drawJoint = function (a) {
    var c = a.getBodyA(),
      g = a.getBodyB(),
      b = c.m_xf.position,
      e = g.m_xf.position,
      f = a.getAnchorA(),
      m = a.getAnchorB(),
      r = h.s_jointColor;
    switch (a.m_type) {
      case q.e_distanceJoint:
        this.m_debugDraw.drawSegment(f, m, r);
        break;
      case q.e_pulleyJoint:
        c = a instanceof n ? a : null;
        a = c.getGroundAnchorA();
        c = c.getGroundAnchorB();
        this.m_debugDraw.drawSegment(a, f, r);
        this.m_debugDraw.drawSegment(c, m, r);
        this.m_debugDraw.drawSegment(a, c, r);
        break;
      case q.e_mouseJoint:
        this.m_debugDraw.drawSegment(f, m, r);
        break;
      default:
        c != this.m_groundBody && this.m_debugDraw.drawSegment(b, f, r);
        this.m_debugDraw.drawSegment(f, m, r);
        g != this.m_groundBody && this.m_debugDraw.drawSegment(e, m, r);
    }
  };
  h.prototype.drawShape = function (a, c, g) {
    switch (a.m_type) {
      case Y.e_circleShape:
        var b = a instanceof M ? a : null;
        this.m_debugDraw.drawSolidCircle(
          F.mulX(c, b.m_p),
          b.m_radius,
          c.R.col1,
          g
        );
        break;
      case Y.e_polygonShape:
        b = 0;
        b = a instanceof W ? a : null;
        a = parseInt(b.getVertexCount());
        var e = b.getVertices(),
          f = new Vector(a);
        for (b = 0; b < a; ++b) f[b] = F.mulX(c, e[b]);
        this.m_debugDraw.drawSolidPolygon(f, a, g);
        break;
      case Y.e_edgeShape:
        b = a instanceof L ? a : null;
        this.m_debugDraw.drawSegment(
          F.mulX(c, b.getVertex1()),
          F.mulX(c, b.getVertex2()),
          g
        );
    }
  };
  Box2D.postDefs.push(function () {
    Box2D.Dynamics.World.s_timestep2 = new d();
    Box2D.Dynamics.World.s_xf = new K();
    Box2D.Dynamics.World.s_backupA = new G();
    Box2D.Dynamics.World.s_backupB = new G();
    Box2D.Dynamics.World.s_timestep = new d();
    Box2D.Dynamics.World.s_queue = new Vector();
    Box2D.Dynamics.World.s_jointColor = new w(0.5, 0.8, 0.8);
    Box2D.Dynamics.World.NEW_FIXTURE = 1;
    Box2D.Dynamics.World.LOCKED = 2;
  });
})();
(function () {
  var F = Box2D.Collision.Shapes.CircleShape,
    G = Box2D.Collision.Shapes.EdgeShape,
    K = Box2D.Collision.Shapes.PolygonShape,
    y = Box2D.Collision.Shapes.Shape,
    w = Box2D.Dynamics.Contacts.CircleContact,
    A = Box2D.Dynamics.Contacts.Contact,
    U = Box2D.Dynamics.Contacts.ContactConstraint,
    p = Box2D.Dynamics.Contacts.ContactConstraintPoint,
    B = Box2D.Dynamics.Contacts.ContactEdge,
    Q = Box2D.Dynamics.Contacts.ContactFactory,
    V = Box2D.Dynamics.Contacts.ContactRegister,
    M = Box2D.Dynamics.Contacts.ContactResult,
    L = Box2D.Dynamics.Contacts.Contactsolver,
    I = Box2D.Dynamics.Contacts.EdgeAndCircleContact,
    W = Box2D.Dynamics.Contacts.NullContact,
    Y = Box2D.Dynamics.Contacts.PolyAndCircleContact,
    k = Box2D.Dynamics.Contacts.PolyAndEdgeContact,
    z = Box2D.Dynamics.Contacts.PolygonContact,
    u = Box2D.Dynamics.Contacts.b2PositionsolverManifold,
    D = Box2D.Dynamics.Body,
    H = Box2D.Dynamics.Timestep,
    O = Box2D.Common.b2settings,
    E = Box2D.Common.Math.Mat22,
    R = Box2D.Common.Math.Math,
    N = Box2D.Common.Math.Vec2,
    S = Box2D.Collision.Collision,
    aa = Box2D.Collision.ContactID,
    Z = Box2D.Collision.Manifold,
    d = Box2D.Collision.timeOfImpact,
    h = Box2D.Collision.TOIInput,
    l = Box2D.Collision.WorldManifold;
  Box2D.inherit(w, Box2D.Dynamics.Contacts.Contact);
  w.prototype.__super = Box2D.Dynamics.Contacts.Contact.prototype;
  w.CircleContact = function () {
    Box2D.Dynamics.Contacts.Contact.Contact.apply(this, arguments);
  };
  w.create = function () {
    return new w();
  };
  w.destroy = function () {};
  w.prototype.reset = function (j, o) {
    this.__super.reset.call(this, j, o);
  };
  w.prototype.Evaluate = function () {
    var j = this.m_fixtureA.getBody(),
      o = this.m_fixtureB.getBody();
    S.collideCircles(
      this.m_manifold,
      this.m_fixtureA.getShape() instanceof F
        ? this.m_fixtureA.getShape()
        : null,
      j.m_xf,
      this.m_fixtureB.getShape() instanceof F
        ? this.m_fixtureB.getShape()
        : null,
      o.m_xf
    );
  };
  A.Contact = function () {
    this.m_nodeA = new B();
    this.m_nodeB = new B();
    this.m_manifold = new Z();
    this.m_oldManifold = new Z();
  };
  A.prototype.getManifold = function () {
    return this.m_manifold;
  };
  A.prototype.getWorldManifold = function (j) {
    var o = this.m_fixtureA.getBody(),
      q = this.m_fixtureB.getBody(),
      n = this.m_fixtureA.getShape(),
      a = this.m_fixtureB.getShape();
    j.initialize(
      this.m_manifold,
      o.getTransform(),
      n.m_radius,
      q.getTransform(),
      a.m_radius
    );
  };
  A.prototype.isTouching = function () {
    return (this.m_flags & A.e_touchingFlag) == A.e_touchingFlag;
  };
  A.prototype.isContinuous = function () {
    return (this.m_flags & A.e_continuousFlag) == A.e_continuousFlag;
  };
  A.prototype.setSensor = function (j) {
    if (j) this.m_flags |= A.e_sensorFlag;
    else this.m_flags &= ~A.e_sensorFlag;
  };
  A.prototype.isSensor = function () {
    return (this.m_flags & A.e_sensorFlag) == A.e_sensorFlag;
  };
  A.prototype.setEnabled = function (j) {
    if (j) this.m_flags |= A.e_enabledFlag;
    else this.m_flags &= ~A.e_enabledFlag;
  };
  A.prototype.isEnabled = function () {
    return (this.m_flags & A.e_enabledFlag) == A.e_enabledFlag;
  };
  A.prototype.getNext = function () {
    return this.m_next;
  };
  A.prototype.getFixtureA = function () {
    return this.m_fixtureA;
  };
  A.prototype.getFixtureB = function () {
    return this.m_fixtureB;
  };
  A.prototype.flagForFiltering = function () {
    this.m_flags |= A.e_filterFlag;
  };
  A.prototype.Contact = function () {};
  A.prototype.reset = function (j, o) {
    if (j === undefined) j = null;
    if (o === undefined) o = null;
    this.m_flags = A.e_enabledFlag;
    if (!j || !o) this.m_fixtureB = this.m_fixtureA = null;
    else {
      if (j.isSensor() || o.isSensor()) this.m_flags |= A.e_sensorFlag;
      var q = j.getBody(),
        n = o.getBody();
      if (
        q.getType() != D.DYNAMIC_BODY ||
        q.isBullet() ||
        n.getType() != D.DYNAMIC_BODY ||
        n.isBullet()
      )
        this.m_flags |= A.e_continuousFlag;
      this.m_fixtureA = j;
      this.m_fixtureB = o;
      this.m_manifold.m_pointCount = 0;
      this.m_next = this.m_prev = null;
      this.m_nodeA.contact = null;
      this.m_nodeA.prev = null;
      this.m_nodeA.next = null;
      this.m_nodeA.other = null;
      this.m_nodeB.contact = null;
      this.m_nodeB.prev = null;
      this.m_nodeB.next = null;
      this.m_nodeB.other = null;
    }
  };
  A.prototype.Update = function (j) {
    var o = this.m_oldManifold;
    this.m_oldManifold = this.m_manifold;
    this.m_manifold = o;
    this.m_flags |= A.e_enabledFlag;
    var q = false;
    o = (this.m_flags & A.e_touchingFlag) == A.e_touchingFlag;
    var n = this.m_fixtureA.m_body,
      a = this.m_fixtureB.m_body,
      c = this.m_fixtureA.m_aabb.testOverlap(this.m_fixtureB.m_aabb);
    if (this.m_flags & A.e_sensorFlag) {
      if (c) {
        q = this.m_fixtureA.getShape();
        c = this.m_fixtureB.getShape();
        n = n.getTransform();
        a = a.getTransform();
        q = y.testOverlap(q, n, c, a);
      }
      this.m_manifold.m_pointCount = 0;
    } else {
      if (
        n.getType() != D.DYNAMIC_BODY ||
        n.isBullet() ||
        a.getType() != D.DYNAMIC_BODY ||
        a.isBullet()
      )
        this.m_flags |= A.e_continuousFlag;
      else this.m_flags &= ~A.e_continuousFlag;
      if (c) {
        this.Evaluate();
        q = this.m_manifold.m_pointCount > 0;
        for (c = 0; c < this.m_manifold.m_pointCount; ++c) {
          var g = this.m_manifold.m_points[c];
          g.m_normalImpulse = 0;
          g.m_tangentImpulse = 0;
          for (
            var b = g.m_id, e = 0;
            e < this.m_oldManifold.m_pointCount;
            ++e
          ) {
            var f = this.m_oldManifold.m_points[e];
            if (f.m_id.key == b.key) {
              g.m_normalImpulse = f.m_normalImpulse;
              g.m_tangentImpulse = f.m_tangentImpulse;
              break;
            }
          }
        }
      } else this.m_manifold.m_pointCount = 0;
      if (q != o) {
        n.setAwake(true);
        a.setAwake(true);
      }
    }
    if (q) this.m_flags |= A.e_touchingFlag;
    else this.m_flags &= ~A.e_touchingFlag;
    o == false && q == true && j.beginContact(this);
    o == true && q == false && j.endContact(this);
    (this.m_flags & A.e_sensorFlag) == 0 &&
      j.Presolve(this, this.m_oldManifold);
  };
  A.prototype.Evaluate = function () {};
  A.prototype.computeTOI = function (j, o) {
    A.s_input.proxyA.set(this.m_fixtureA.getShape());
    A.s_input.proxyB.set(this.m_fixtureB.getShape());
    A.s_input.sweepA = j;
    A.s_input.sweepB = o;
    A.s_input.tolerance = O.LINEAR_SLOP;
    return d.timeOfImpact(A.s_input);
  };
  Box2D.postDefs.push(function () {
    Box2D.Dynamics.Contacts.Contact.e_sensorFlag = 1;
    Box2D.Dynamics.Contacts.Contact.e_continuousFlag = 2;
    Box2D.Dynamics.Contacts.Contact.e_islandFlag = 4;
    Box2D.Dynamics.Contacts.Contact.e_toiFlag = 8;
    Box2D.Dynamics.Contacts.Contact.e_touchingFlag = 16;
    Box2D.Dynamics.Contacts.Contact.e_enabledFlag = 32;
    Box2D.Dynamics.Contacts.Contact.e_filterFlag = 64;
    Box2D.Dynamics.Contacts.Contact.s_input = new h();
  });
  U.ContactConstraint = function () {
    this.localPlaneNormal = new N();
    this.localPoint = new N();
    this.normal = new N();
    this.normalMass = new E();
    this.K = new E();
  };
  U.prototype.ContactConstraint = function () {
    this.points = new Vector(O.MAX_MANIFOLD_POINTS);
    for (var j = 0; j < O.MAX_MANIFOLD_POINTS; j++) this.points[j] = new p();
  };
  p.ContactConstraintPoint = function () {
    this.localPoint = new N();
    this.rA = new N();
    this.rB = new N();
  };
  B.ContactEdge = function () {};
  Q.ContactFactory = function () {};
  Q.prototype.ContactFactory = function (j) {
    this.m_allocator = j;
    this.initializeRegisters();
  };
  Q.prototype.addType = function (j, o, q, n) {
    if (q === undefined) q = 0;
    if (n === undefined) n = 0;
    this.m_registers[q][n].createFcn = j;
    this.m_registers[q][n].destroyFcn = o;
    this.m_registers[q][n].primary = true;
    if (q != n) {
      this.m_registers[n][q].createFcn = j;
      this.m_registers[n][q].destroyFcn = o;
      this.m_registers[n][q].primary = false;
    }
  };
  Q.prototype.initializeRegisters = function () {
    this.m_registers = new Vector(y.e_shapeTypeCount);
    for (var j = 0; j < y.e_shapeTypeCount; j++) {
      this.m_registers[j] = new Vector(y.e_shapeTypeCount);
      for (var o = 0; o < y.e_shapeTypeCount; o++)
        this.m_registers[j][o] = new V();
    }
    this.addType(w.create, w.destroy, y.e_circleShape, y.e_circleShape);
    this.addType(Y.create, Y.destroy, y.e_polygonShape, y.e_circleShape);
    this.addType(z.create, z.destroy, y.e_polygonShape, y.e_polygonShape);
    this.addType(I.create, I.destroy, y.e_edgeShape, y.e_circleShape);
    this.addType(k.create, k.destroy, y.e_polygonShape, y.e_edgeShape);
  };
  Q.prototype.create = function (j, o) {
    var q = parseInt(j.getType()),
      n = parseInt(o.getType());
    q = this.m_registers[q][n];
    if (q.pool) {
      n = q.pool;
      q.pool = n.m_next;
      q.poolCount--;
      n.reset(j, o);
      return n;
    }
    n = q.createFcn;
    if (n != null) {
      if (q.primary) {
        n = n(this.m_allocator);
        n.reset(j, o);
      } else {
        n = n(this.m_allocator);
        n.reset(o, j);
      }
      return n;
    } else return null;
  };
  Q.prototype.destroy = function (j) {
    if (j.m_manifold.m_pointCount > 0) {
      j.m_fixtureA.m_body.setAwake(true);
      j.m_fixtureB.m_body.setAwake(true);
    }
    var o = parseInt(j.m_fixtureA.getType()),
      q = parseInt(j.m_fixtureB.getType());
    o = this.m_registers[o][q];
    o.poolCount++;
    j.m_next = o.pool;
    o.pool = j;
    o = o.destroyFcn;
    o(j, this.m_allocator);
  };
  V.ContactRegister = function () {};
  M.ContactResult = function () {
    this.position = new N();
    this.normal = new N();
    this.id = new aa();
  };
  L.Contactsolver = function () {
    this.m_step = new H();
    this.m_constraints = new Vector();
  };
  L.prototype.Contactsolver = function () {};
  L.prototype.initialize = function (j, o, q, n) {
    if (q === undefined) q = 0;
    var a;
    this.m_step.set(j);
    this.m_allocator = n;
    j = 0;
    for (
      this.m_constraintCount = q;
      this.m_constraints.length < this.m_constraintCount;

    )
      this.m_constraints[this.m_constraints.length] = new U();
    for (j = 0; j < q; ++j) {
      a = o[j];
      n = a.m_fixtureA;
      var c = a.m_fixtureB,
        g = n.m_shape.m_radius,
        b = c.m_shape.m_radius,
        e = n.m_body,
        f = c.m_body,
        m = a.getManifold(),
        r = O.mixFriction(n.getFriction(), c.getFriction()),
        s = O.mixRestitution(n.getRestitution(), c.getRestitution()),
        v = e.m_linearVelocity.x,
        t = e.m_linearVelocity.y,
        x = f.m_linearVelocity.x,
        C = f.m_linearVelocity.y,
        J = e.m_angularVelocity,
        T = f.m_angularVelocity;
      O.assert(m.m_pointCount > 0);
      L.s_worldManifold.initialize(m, e.m_xf, g, f.m_xf, b);
      c = L.s_worldManifold.m_normal.x;
      a = L.s_worldManifold.m_normal.y;
      n = this.m_constraints[j];
      n.bodyA = e;
      n.bodyB = f;
      n.manifold = m;
      n.normal.x = c;
      n.normal.y = a;
      n.pointCount = m.m_pointCount;
      n.friction = r;
      n.restitution = s;
      n.localPlaneNormal.x = m.m_localPlaneNormal.x;
      n.localPlaneNormal.y = m.m_localPlaneNormal.y;
      n.localPoint.x = m.m_localPoint.x;
      n.localPoint.y = m.m_localPoint.y;
      n.radius = g + b;
      n.type = m.m_type;
      for (g = 0; g < n.pointCount; ++g) {
        r = m.m_points[g];
        b = n.points[g];
        b.normalImpulse = r.m_normalImpulse;
        b.tangentImpulse = r.m_tangentImpulse;
        b.localPoint.setV(r.m_localPoint);
        r = b.rA.x = L.s_worldManifold.m_points[g].x - e.m_sweep.c.x;
        s = b.rA.y = L.s_worldManifold.m_points[g].y - e.m_sweep.c.y;
        var P = (b.rB.x = L.s_worldManifold.m_points[g].x - f.m_sweep.c.x),
          X = (b.rB.y = L.s_worldManifold.m_points[g].y - f.m_sweep.c.y),
          $ = r * a - s * c,
          ba = P * a - X * c;
        $ *= $;
        ba *= ba;
        b.normalMass =
          1 / (e.m_invMass + f.m_invMass + e.m_invI * $ + f.m_invI * ba);
        var ca = e.m_mass * e.m_invMass + f.m_mass * f.m_invMass;
        ca += e.m_mass * e.m_invI * $ + f.m_mass * f.m_invI * ba;
        b.equalizedMass = 1 / ca;
        ba = a;
        ca = -c;
        $ = r * ca - s * ba;
        ba = P * ca - X * ba;
        $ *= $;
        ba *= ba;
        b.tangentMass =
          1 / (e.m_invMass + f.m_invMass + e.m_invI * $ + f.m_invI * ba);
        b.velocityBias = 0;
        r =
          n.normal.x * (x + -T * X - v - -J * s) +
          n.normal.y * (C + T * P - t - J * r);
        if (r < -O.VELOCITY_THRESHOLD) b.velocityBias += -n.restitution * r;
      }
      if (n.pointCount == 2) {
        C = n.points[0];
        x = n.points[1];
        m = e.m_invMass;
        e = e.m_invI;
        v = f.m_invMass;
        f = f.m_invI;
        t = C.rA.x * a - C.rA.y * c;
        C = C.rB.x * a - C.rB.y * c;
        J = x.rA.x * a - x.rA.y * c;
        x = x.rB.x * a - x.rB.y * c;
        c = m + v + e * t * t + f * C * C;
        a = m + v + e * J * J + f * x * x;
        f = m + v + e * t * J + f * C * x;
        if (c * c < 100 * (c * a - f * f)) {
          n.K.col1.set(c, f);
          n.K.col2.set(f, a);
          n.K.getInverse(n.normalMass);
        } else n.pointCount = 1;
      }
    }
  };
  L.prototype.initVelocityConstraints = function (j) {
    for (var o = 0; o < this.m_constraintCount; ++o) {
      var q = this.m_constraints[o],
        n = q.bodyA,
        a = q.bodyB,
        c = n.m_invMass,
        g = n.m_invI,
        b = a.m_invMass,
        e = a.m_invI,
        f = q.normal.x,
        m = q.normal.y,
        r = m,
        s = -f,
        v = 0,
        t = 0;
      if (j.warmStarting) {
        t = q.pointCount;
        for (v = 0; v < t; ++v) {
          var x = q.points[v];
          x.normalImpulse *= j.dtRatio;
          x.tangentImpulse *= j.dtRatio;
          var C = x.normalImpulse * f + x.tangentImpulse * r,
            J = x.normalImpulse * m + x.tangentImpulse * s;
          n.m_angularVelocity -= g * (x.rA.x * J - x.rA.y * C);
          n.m_linearVelocity.x -= c * C;
          n.m_linearVelocity.y -= c * J;
          a.m_angularVelocity += e * (x.rB.x * J - x.rB.y * C);
          a.m_linearVelocity.x += b * C;
          a.m_linearVelocity.y += b * J;
        }
      } else {
        t = q.pointCount;
        for (v = 0; v < t; ++v) {
          n = q.points[v];
          n.normalImpulse = 0;
          n.tangentImpulse = 0;
        }
      }
    }
  };
  L.prototype.solveVelocityConstraints = function () {
    for (
      var j = 0,
        o,
        q = 0,
        n = 0,
        a = 0,
        c = (n = n = q = q = 0),
        g = (q = q = 0),
        b = (q = a = 0),
        e = 0,
        f,
        m = 0;
      m < this.m_constraintCount;
      ++m
    ) {
      a = this.m_constraints[m];
      var r = a.bodyA,
        s = a.bodyB,
        v = r.m_angularVelocity,
        t = s.m_angularVelocity,
        x = r.m_linearVelocity,
        C = s.m_linearVelocity,
        J = r.m_invMass,
        T = r.m_invI,
        P = s.m_invMass,
        X = s.m_invI;
      b = a.normal.x;
      var $ = (e = a.normal.y);
      f = -b;
      g = a.friction;
      for (j = 0; j < a.pointCount; j++) {
        o = a.points[j];
        q = C.x - t * o.rB.y - x.x + v * o.rA.y;
        n = C.y + t * o.rB.x - x.y - v * o.rA.x;
        q = q * $ + n * f;
        q = o.tangentMass * -q;
        n = g * o.normalImpulse;
        n = R.clamp(o.tangentImpulse + q, -n, n);
        q = n - o.tangentImpulse;
        c = q * $;
        q = q * f;
        x.x -= J * c;
        x.y -= J * q;
        v -= T * (o.rA.x * q - o.rA.y * c);
        C.x += P * c;
        C.y += P * q;
        t += X * (o.rB.x * q - o.rB.y * c);
        o.tangentImpulse = n;
      }
      parseInt(a.pointCount);
      if (a.pointCount == 1) {
        o = a.points[0];
        q = C.x + -t * o.rB.y - x.x - -v * o.rA.y;
        n = C.y + t * o.rB.x - x.y - v * o.rA.x;
        a = q * b + n * e;
        q = -o.normalMass * (a - o.velocityBias);
        n = o.normalImpulse + q;
        n = n > 0 ? n : 0;
        q = n - o.normalImpulse;
        c = q * b;
        q = q * e;
        x.x -= J * c;
        x.y -= J * q;
        v -= T * (o.rA.x * q - o.rA.y * c);
        C.x += P * c;
        C.y += P * q;
        t += X * (o.rB.x * q - o.rB.y * c);
        o.normalImpulse = n;
      } else {
        o = a.points[0];
        j = a.points[1];
        q = o.normalImpulse;
        g = j.normalImpulse;
        var ba =
            (C.x - t * o.rB.y - x.x + v * o.rA.y) * b +
            (C.y + t * o.rB.x - x.y - v * o.rA.x) * e,
          ca =
            (C.x - t * j.rB.y - x.x + v * j.rA.y) * b +
            (C.y + t * j.rB.x - x.y - v * j.rA.x) * e;
        n = ba - o.velocityBias;
        c = ca - j.velocityBias;
        f = a.K;
        n -= f.col1.x * q + f.col2.x * g;
        for (c -= f.col1.y * q + f.col2.y * g; ; ) {
          f = a.normalMass;
          $ = -(f.col1.x * n + f.col2.x * c);
          f = -(f.col1.y * n + f.col2.y * c);
          if ($ >= 0 && f >= 0) {
            q = $ - q;
            g = f - g;
            a = q * b;
            q = q * e;
            b = g * b;
            e = g * e;
            x.x -= J * (a + b);
            x.y -= J * (q + e);
            v -= T * (o.rA.x * q - o.rA.y * a + j.rA.x * e - j.rA.y * b);
            C.x += P * (a + b);
            C.y += P * (q + e);
            t += X * (o.rB.x * q - o.rB.y * a + j.rB.x * e - j.rB.y * b);
            o.normalImpulse = $;
            j.normalImpulse = f;
            break;
          }
          $ = -o.normalMass * n;
          f = 0;
          ca = a.K.col1.y * $ + c;
          if ($ >= 0 && ca >= 0) {
            q = $ - q;
            g = f - g;
            a = q * b;
            q = q * e;
            b = g * b;
            e = g * e;
            x.x -= J * (a + b);
            x.y -= J * (q + e);
            v -= T * (o.rA.x * q - o.rA.y * a + j.rA.x * e - j.rA.y * b);
            C.x += P * (a + b);
            C.y += P * (q + e);
            t += X * (o.rB.x * q - o.rB.y * a + j.rB.x * e - j.rB.y * b);
            o.normalImpulse = $;
            j.normalImpulse = f;
            break;
          }
          $ = 0;
          f = -j.normalMass * c;
          ba = a.K.col2.x * f + n;
          if (f >= 0 && ba >= 0) {
            q = $ - q;
            g = f - g;
            a = q * b;
            q = q * e;
            b = g * b;
            e = g * e;
            x.x -= J * (a + b);
            x.y -= J * (q + e);
            v -= T * (o.rA.x * q - o.rA.y * a + j.rA.x * e - j.rA.y * b);
            C.x += P * (a + b);
            C.y += P * (q + e);
            t += X * (o.rB.x * q - o.rB.y * a + j.rB.x * e - j.rB.y * b);
            o.normalImpulse = $;
            j.normalImpulse = f;
            break;
          }
          f = $ = 0;
          ba = n;
          ca = c;
          if (ba >= 0 && ca >= 0) {
            q = $ - q;
            g = f - g;
            a = q * b;
            q = q * e;
            b = g * b;
            e = g * e;
            x.x -= J * (a + b);
            x.y -= J * (q + e);
            v -= T * (o.rA.x * q - o.rA.y * a + j.rA.x * e - j.rA.y * b);
            C.x += P * (a + b);
            C.y += P * (q + e);
            t += X * (o.rB.x * q - o.rB.y * a + j.rB.x * e - j.rB.y * b);
            o.normalImpulse = $;
            j.normalImpulse = f;
            break;
          }
          break;
        }
      }
      r.m_angularVelocity = v;
      s.m_angularVelocity = t;
    }
  };
  L.prototype.finalizeVelocityConstraints = function () {
    for (var j = 0; j < this.m_constraintCount; ++j)
      for (
        var o = this.m_constraints[j], q = o.manifold, n = 0;
        n < o.pointCount;
        ++n
      ) {
        var a = q.m_points[n],
          c = o.points[n];
        a.m_normalImpulse = c.normalImpulse;
        a.m_tangentImpulse = c.tangentImpulse;
      }
  };
  L.prototype.solvePositionConstraints = function (j) {
    if (j === undefined) j = 0;
    for (var o = 0, q = 0; q < this.m_constraintCount; q++) {
      var n = this.m_constraints[q],
        a = n.bodyA,
        c = n.bodyB,
        g = a.m_mass * a.m_invMass,
        b = a.m_mass * a.m_invI,
        e = c.m_mass * c.m_invMass,
        f = c.m_mass * c.m_invI;
      L.s_psm.initialize(n);
      for (var m = L.s_psm.m_normal, r = 0; r < n.pointCount; r++) {
        var s = n.points[r],
          v = L.s_psm.m_points[r],
          t = L.s_psm.m_separations[r],
          x = v.x - a.m_sweep.c.x,
          C = v.y - a.m_sweep.c.y,
          J = v.x - c.m_sweep.c.x;
        v = v.y - c.m_sweep.c.y;
        o = o < t ? o : t;
        t = R.clamp(j * (t + O.LINEAR_SLOP), -O.MAX_LINEAR_CORRECTION, 0);
        t = -s.equalizedMass * t;
        s = t * m.x;
        t = t * m.y;
        a.m_sweep.c.x -= g * s;
        a.m_sweep.c.y -= g * t;
        a.m_sweep.a -= b * (x * t - C * s);
        a.SynchronizeTransform();
        c.m_sweep.c.x += e * s;
        c.m_sweep.c.y += e * t;
        c.m_sweep.a += f * (J * t - v * s);
        c.SynchronizeTransform();
      }
    }
    return o > -1.5 * O.LINEAR_SLOP;
  };
  Box2D.postDefs.push(function () {
    Box2D.Dynamics.Contacts.Contactsolver.s_worldManifold = new l();
    Box2D.Dynamics.Contacts.Contactsolver.s_psm = new u();
  });
  Box2D.inherit(I, Box2D.Dynamics.Contacts.Contact);
  I.prototype.__super = Box2D.Dynamics.Contacts.Contact.prototype;
  I.EdgeAndCircleContact = function () {
    Box2D.Dynamics.Contacts.Contact.Contact.apply(this, arguments);
  };
  I.create = function () {
    return new I();
  };
  I.destroy = function () {};
  I.prototype.reset = function (j, o) {
    this.__super.reset.call(this, j, o);
  };
  I.prototype.Evaluate = function () {
    var j = this.m_fixtureA.getBody(),
      o = this.m_fixtureB.getBody();
    this.b2collideEdgeAndCircle(
      this.m_manifold,
      this.m_fixtureA.getShape() instanceof G
        ? this.m_fixtureA.getShape()
        : null,
      j.m_xf,
      this.m_fixtureB.getShape() instanceof F
        ? this.m_fixtureB.getShape()
        : null,
      o.m_xf
    );
  };
  I.prototype.b2collideEdgeAndCircle = function () {};
  Box2D.inherit(W, Box2D.Dynamics.Contacts.Contact);
  W.prototype.__super = Box2D.Dynamics.Contacts.Contact.prototype;
  W.NullContact = function () {
    Box2D.Dynamics.Contacts.Contact.Contact.apply(this, arguments);
  };
  W.prototype.NullContact = function () {
    this.__super.Contact.call(this);
  };
  W.prototype.Evaluate = function () {};
  Box2D.inherit(Y, Box2D.Dynamics.Contacts.Contact);
  Y.prototype.__super = Box2D.Dynamics.Contacts.Contact.prototype;
  Y.PolyAndCircleContact = function () {
    Box2D.Dynamics.Contacts.Contact.Contact.apply(this, arguments);
  };
  Y.create = function () {
    return new Y();
  };
  Y.destroy = function () {};
  Y.prototype.reset = function (j, o) {
    this.__super.reset.call(this, j, o);
    O.assert(j.getType() == y.e_polygonShape);
    O.assert(o.getType() == y.e_circleShape);
  };
  Y.prototype.Evaluate = function () {
    var j = this.m_fixtureA.m_body,
      o = this.m_fixtureB.m_body;
    S.collidePolygonAndCircle(
      this.m_manifold,
      this.m_fixtureA.getShape() instanceof K
        ? this.m_fixtureA.getShape()
        : null,
      j.m_xf,
      this.m_fixtureB.getShape() instanceof F
        ? this.m_fixtureB.getShape()
        : null,
      o.m_xf
    );
  };
  Box2D.inherit(k, Box2D.Dynamics.Contacts.Contact);
  k.prototype.__super = Box2D.Dynamics.Contacts.Contact.prototype;
  k.PolyAndEdgeContact = function () {
    Box2D.Dynamics.Contacts.Contact.Contact.apply(this, arguments);
  };
  k.create = function () {
    return new k();
  };
  k.destroy = function () {};
  k.prototype.reset = function (j, o) {
    this.__super.reset.call(this, j, o);
    O.assert(j.getType() == y.e_polygonShape);
    O.assert(o.getType() == y.e_edgeShape);
  };
  k.prototype.Evaluate = function () {
    var j = this.m_fixtureA.getBody(),
      o = this.m_fixtureB.getBody();
    this.b2collidePolyAndEdge(
      this.m_manifold,
      this.m_fixtureA.getShape() instanceof K
        ? this.m_fixtureA.getShape()
        : null,
      j.m_xf,
      this.m_fixtureB.getShape() instanceof G
        ? this.m_fixtureB.getShape()
        : null,
      o.m_xf
    );
  };
  k.prototype.b2collidePolyAndEdge = function () {};
  Box2D.inherit(z, Box2D.Dynamics.Contacts.Contact);
  z.prototype.__super = Box2D.Dynamics.Contacts.Contact.prototype;
  z.PolygonContact = function () {
    Box2D.Dynamics.Contacts.Contact.Contact.apply(this, arguments);
  };
  z.create = function () {
    return new z();
  };
  z.destroy = function () {};
  z.prototype.reset = function (j, o) {
    this.__super.reset.call(this, j, o);
  };
  z.prototype.Evaluate = function () {
    var j = this.m_fixtureA.getBody(),
      o = this.m_fixtureB.getBody();
    S.collidePolygons(
      this.m_manifold,
      this.m_fixtureA.getShape() instanceof K
        ? this.m_fixtureA.getShape()
        : null,
      j.m_xf,
      this.m_fixtureB.getShape() instanceof K
        ? this.m_fixtureB.getShape()
        : null,
      o.m_xf
    );
  };
  u.b2PositionsolverManifold = function () {};
  u.prototype.b2PositionsolverManifold = function () {
    this.m_normal = new N();
    this.m_separations = new Vector_a2j_Number(O.MAX_MANIFOLD_POINTS);
    this.m_points = new Vector(O.MAX_MANIFOLD_POINTS);
    for (var j = 0; j < O.MAX_MANIFOLD_POINTS; j++) this.m_points[j] = new N();
  };
  u.prototype.initialize = function (j) {
    O.assert(j.pointCount > 0);
    var o = 0,
      q = 0,
      n = 0,
      a,
      c = 0,
      g = 0;
    switch (j.type) {
      case Z.CIRCLES:
        a = j.bodyA.m_xf.R;
        n = j.localPoint;
        o = j.bodyA.m_xf.position.x + (a.col1.x * n.x + a.col2.x * n.y);
        q = j.bodyA.m_xf.position.y + (a.col1.y * n.x + a.col2.y * n.y);
        a = j.bodyB.m_xf.R;
        n = j.points[0].localPoint;
        c = j.bodyB.m_xf.position.x + (a.col1.x * n.x + a.col2.x * n.y);
        a = j.bodyB.m_xf.position.y + (a.col1.y * n.x + a.col2.y * n.y);
        n = c - o;
        g = a - q;
        var b = n * n + g * g;
        if (b > Number.MIN_VALUE * Number.MIN_VALUE) {
          b = Math.sqrt(b);
          this.m_normal.x = n / b;
          this.m_normal.y = g / b;
        } else {
          this.m_normal.x = 1;
          this.m_normal.y = 0;
        }
        this.m_points[0].x = 0.5 * (o + c);
        this.m_points[0].y = 0.5 * (q + a);
        this.m_separations[0] =
          n * this.m_normal.x + g * this.m_normal.y - j.radius;
        break;
      case Z.FACE_A:
        a = j.bodyA.m_xf.R;
        n = j.localPlaneNormal;
        this.m_normal.x = a.col1.x * n.x + a.col2.x * n.y;
        this.m_normal.y = a.col1.y * n.x + a.col2.y * n.y;
        a = j.bodyA.m_xf.R;
        n = j.localPoint;
        c = j.bodyA.m_xf.position.x + (a.col1.x * n.x + a.col2.x * n.y);
        g = j.bodyA.m_xf.position.y + (a.col1.y * n.x + a.col2.y * n.y);
        a = j.bodyB.m_xf.R;
        for (o = 0; o < j.pointCount; ++o) {
          n = j.points[o].localPoint;
          q = j.bodyB.m_xf.position.x + (a.col1.x * n.x + a.col2.x * n.y);
          n = j.bodyB.m_xf.position.y + (a.col1.y * n.x + a.col2.y * n.y);
          this.m_separations[o] =
            (q - c) * this.m_normal.x + (n - g) * this.m_normal.y - j.radius;
          this.m_points[o].x = q;
          this.m_points[o].y = n;
        }
        break;
      case Z.FACE_B:
        a = j.bodyB.m_xf.R;
        n = j.localPlaneNormal;
        this.m_normal.x = a.col1.x * n.x + a.col2.x * n.y;
        this.m_normal.y = a.col1.y * n.x + a.col2.y * n.y;
        a = j.bodyB.m_xf.R;
        n = j.localPoint;
        c = j.bodyB.m_xf.position.x + (a.col1.x * n.x + a.col2.x * n.y);
        g = j.bodyB.m_xf.position.y + (a.col1.y * n.x + a.col2.y * n.y);
        a = j.bodyA.m_xf.R;
        for (o = 0; o < j.pointCount; ++o) {
          n = j.points[o].localPoint;
          q = j.bodyA.m_xf.position.x + (a.col1.x * n.x + a.col2.x * n.y);
          n = j.bodyA.m_xf.position.y + (a.col1.y * n.x + a.col2.y * n.y);
          this.m_separations[o] =
            (q - c) * this.m_normal.x + (n - g) * this.m_normal.y - j.radius;
          this.m_points[o].set(q, n);
        }
        this.m_normal.x *= -1;
        this.m_normal.y *= -1;
    }
  };
  Box2D.postDefs.push(function () {
    Box2D.Dynamics.Contacts.b2PositionsolverManifold.circlePointA = new N();
    Box2D.Dynamics.Contacts.b2PositionsolverManifold.circlePointB = new N();
  });
})();
(function () {
  var F = Box2D.Common.Math.Mat22,
    G = Box2D.Common.Math.Math,
    K = Box2D.Common.Math.Vec2,
    y = Box2D.Common.Color,
    w = Box2D.Dynamics.Controllers.BuoyancyController,
    A = Box2D.Dynamics.Controllers.ConstantAccelController,
    U = Box2D.Dynamics.Controllers.ConstantForceController,
    p = Box2D.Dynamics.Controllers.Controller,
    B = Box2D.Dynamics.Controllers.ControllerEdge,
    Q = Box2D.Dynamics.Controllers.GravityController,
    V = Box2D.Dynamics.Controllers.TensorDampingController;
  Box2D.inherit(w, Box2D.Dynamics.Controllers.Controller);
  w.prototype.__super = Box2D.Dynamics.Controllers.Controller.prototype;
  w.BuoyancyController = function () {
    Box2D.Dynamics.Controllers.Controller.Controller.apply(this, arguments);
    this.normal = new K(0, -1);
    this.density = this.offset = 0;
    this.velocity = new K(0, 0);
    this.linearDrag = 2;
    this.angularDrag = 1;
    this.useDensity = false;
    this.useWorldGravity = true;
    this.gravity = null;
  };
  w.prototype.step = function () {
    if (this.m_bodyList) {
      if (this.useWorldGravity)
        this.gravity = this.getWorld().getGravity().copy();
      for (var M = this.m_bodyList; M; M = M.nextBody) {
        var L = M.body;
        if (L.isAwake() != false) {
          for (
            var I = new K(), W = new K(), Y = 0, k = 0, z = L.getFixtureList();
            z;
            z = z.getNext()
          ) {
            var u = new K(),
              D = z
                .getShape()
                .computeSubmergedArea(
                  this.normal,
                  this.offset,
                  L.getTransform(),
                  u
                );
            Y += D;
            I.x += D * u.x;
            I.y += D * u.y;
            var H = 0;
            H = 1;
            k += D * H;
            W.x += D * u.x * H;
            W.y += D * u.y * H;
          }
          I.x /= Y;
          I.y /= Y;
          W.x /= k;
          W.y /= k;
          if (!(Y < Number.MIN_VALUE)) {
            k = this.gravity.getNegative();
            k.multiply(this.density * Y);
            L.applyForce(k, W);
            W = L.getLinearVelocityFromWorldPoint(I);
            W.subtract(this.velocity);
            W.multiply(-this.linearDrag * Y);
            L.applyForce(W, I);
            L.applyTorque(
              (-L.getInertia() / L.getMass()) *
                Y *
                L.getAngularVelocity() *
                this.angularDrag
            );
          }
        }
      }
    }
  };
  w.prototype.draw = function (M) {
    var L = new K(),
      I = new K();
    L.x = this.normal.x * this.offset + this.normal.y * 1e3;
    L.y = this.normal.y * this.offset - this.normal.x * 1e3;
    I.x = this.normal.x * this.offset - this.normal.y * 1e3;
    I.y = this.normal.y * this.offset + this.normal.x * 1e3;
    var W = new y(0, 0, 1);
    M.drawSegment(L, I, W);
  };
  Box2D.inherit(A, Box2D.Dynamics.Controllers.Controller);
  A.prototype.__super = Box2D.Dynamics.Controllers.Controller.prototype;
  A.ConstantAccelController = function () {
    Box2D.Dynamics.Controllers.Controller.Controller.apply(this, arguments);
    this.A = new K(0, 0);
  };
  A.prototype.step = function (M) {
    M = new K(this.A.x * M.dt, this.A.y * M.dt);
    for (var L = this.m_bodyList; L; L = L.nextBody) {
      var I = L.body;
      I.isAwake() &&
        I.setLinearVelocity(
          new K(I.getLinearVelocity().x + M.x, I.getLinearVelocity().y + M.y)
        );
    }
  };
  Box2D.inherit(U, Box2D.Dynamics.Controllers.Controller);
  U.prototype.__super = Box2D.Dynamics.Controllers.Controller.prototype;
  U.ConstantForceController = function () {
    Box2D.Dynamics.Controllers.Controller.Controller.apply(this, arguments);
    this.F = new K(0, 0);
  };
  U.prototype.step = function () {
    for (var M = this.m_bodyList; M; M = M.nextBody) {
      var L = M.body;
      L.isAwake() && L.applyForce(this.F, L.getWorldCenter());
    }
  };
  p.Controller = function () {};
  p.prototype.step = function () {};
  p.prototype.draw = function () {};
  p.prototype.addBody = function (M) {
    var L = new B();
    L.controller = this;
    L.body = M;
    L.nextBody = this.m_bodyList;
    L.prevBody = null;
    this.m_bodyList = L;
    if (L.nextBody) L.nextBody.prevBody = L;
    this.m_bodyCount++;
    L.nextController = M.m_controllerList;
    L.prevController = null;
    M.m_controllerList = L;
    if (L.nextController) L.nextController.prevController = L;
    M.m_controllerCount++;
  };
  p.prototype.removeBody = function (M) {
    for (var L = M.m_controllerList; L && L.controller != this; )
      L = L.nextController;
    if (L.prevBody) L.prevBody.nextBody = L.nextBody;
    if (L.nextBody) L.nextBody.prevBody = L.prevBody;
    if (L.nextController) L.nextController.prevController = L.prevController;
    if (L.prevController) L.prevController.nextController = L.nextController;
    if (this.m_bodyList == L) this.m_bodyList = L.nextBody;
    if (M.m_controllerList == L) M.m_controllerList = L.nextController;
    M.m_controllerCount--;
    this.m_bodyCount--;
  };
  p.prototype.clear = function () {
    for (; this.m_bodyList; ) this.removeBody(this.m_bodyList.body);
  };
  p.prototype.getNext = function () {
    return this.m_next;
  };
  p.prototype.getWorld = function () {
    return this.m_world;
  };
  p.prototype.getBodyList = function () {
    return this.m_bodyList;
  };
  B.ControllerEdge = function () {};
  Box2D.inherit(Q, Box2D.Dynamics.Controllers.Controller);
  Q.prototype.__super = Box2D.Dynamics.Controllers.Controller.prototype;
  Q.GravityController = function () {
    Box2D.Dynamics.Controllers.Controller.Controller.apply(this, arguments);
    this.G = 1;
    this.invSqr = true;
  };
  Q.prototype.step = function () {
    var M = null,
      L = null,
      I = null,
      W = 0,
      Y = null,
      k = null,
      z = null,
      u = 0,
      D = 0,
      H = 0;
    u = null;
    if (this.invSqr)
      for (M = this.m_bodyList; M; M = M.nextBody) {
        L = M.body;
        I = L.getWorldCenter();
        W = L.getMass();
        for (Y = this.m_bodyList; Y != M; Y = Y.nextBody) {
          k = Y.body;
          z = k.getWorldCenter();
          u = z.x - I.x;
          D = z.y - I.y;
          H = u * u + D * D;
          if (!(H < Number.MIN_VALUE)) {
            u = new K(u, D);
            u.multiply((this.G / H / Math.sqrt(H)) * W * k.getMass());
            L.isAwake() && L.applyForce(u, I);
            u.multiply(-1);
            k.isAwake() && k.applyForce(u, z);
          }
        }
      }
    else
      for (M = this.m_bodyList; M; M = M.nextBody) {
        L = M.body;
        I = L.getWorldCenter();
        W = L.getMass();
        for (Y = this.m_bodyList; Y != M; Y = Y.nextBody) {
          k = Y.body;
          z = k.getWorldCenter();
          u = z.x - I.x;
          D = z.y - I.y;
          H = u * u + D * D;
          if (!(H < Number.MIN_VALUE)) {
            u = new K(u, D);
            u.multiply((this.G / H) * W * k.getMass());
            L.isAwake() && L.applyForce(u, I);
            u.multiply(-1);
            k.isAwake() && k.applyForce(u, z);
          }
        }
      }
  };
  Box2D.inherit(V, Box2D.Dynamics.Controllers.Controller);
  V.prototype.__super = Box2D.Dynamics.Controllers.Controller.prototype;
  V.TensorDampingController = function () {
    Box2D.Dynamics.Controllers.Controller.Controller.apply(this, arguments);
    this.T = new F();
    this.maxTimestep = 0;
  };
  V.prototype.setAxisAligned = function (M, L) {
    if (M === undefined) M = 0;
    if (L === undefined) L = 0;
    this.T.col1.x = -M;
    this.T.col1.y = 0;
    this.T.col2.x = 0;
    this.T.col2.y = -L;
    this.maxTimestep = M > 0 || L > 0 ? 1 / Math.max(M, L) : 0;
  };
  V.prototype.step = function (M) {
    M = M.dt;
    if (!(M <= Number.MIN_VALUE)) {
      if (M > this.maxTimestep && this.maxTimestep > 0) M = this.maxTimestep;
      for (var L = this.m_bodyList; L; L = L.nextBody) {
        var I = L.body;
        if (I.isAwake()) {
          var W = I.getWorldVector(
            G.mulMV(this.T, I.getLocalVector(I.getLinearVelocity()))
          );
          I.setLinearVelocity(
            new K(
              I.getLinearVelocity().x + W.x * M,
              I.getLinearVelocity().y + W.y * M
            )
          );
        }
      }
    }
  };
})();
(function () {
  var F = Box2D.Common.b2settings,
    G = Box2D.Common.Math.Mat22,
    K = Box2D.Common.Math.Mat33,
    y = Box2D.Common.Math.Math,
    w = Box2D.Common.Math.Vec2,
    A = Box2D.Common.Math.Vec3,
    U = Box2D.Dynamics.Joints.distanceJoint,
    p = Box2D.Dynamics.Joints.distanceJointDef,
    B = Box2D.Dynamics.Joints.FrictionJoint,
    Q = Box2D.Dynamics.Joints.FrictionJointDef,
    V = Box2D.Dynamics.Joints.GearJoint,
    M = Box2D.Dynamics.Joints.GearJointDef,
    L = Box2D.Dynamics.Joints.Jacobian,
    I = Box2D.Dynamics.Joints.Joint,
    W = Box2D.Dynamics.Joints.JointDef,
    Y = Box2D.Dynamics.Joints.JointEdge,
    k = Box2D.Dynamics.Joints.LineJoint,
    z = Box2D.Dynamics.Joints.LineJointDef,
    u = Box2D.Dynamics.Joints.MouseJoint,
    D = Box2D.Dynamics.Joints.MouseJointDef,
    H = Box2D.Dynamics.Joints.PrismaticJoint,
    O = Box2D.Dynamics.Joints.PrismaticJointDef,
    E = Box2D.Dynamics.Joints.PulleyJoint,
    R = Box2D.Dynamics.Joints.PulleyJointDef,
    N = Box2D.Dynamics.Joints.RevoluteJoint,
    S = Box2D.Dynamics.Joints.RevoluteJointDef,
    aa = Box2D.Dynamics.Joints.WeldJoint,
    Z = Box2D.Dynamics.Joints.WeldJointDef;
  Box2D.inherit(U, Box2D.Dynamics.Joints.Joint);
  U.prototype.__super = Box2D.Dynamics.Joints.Joint.prototype;
  U.distanceJoint = function () {
    Box2D.Dynamics.Joints.Joint.Joint.apply(this, arguments);
    this.m_localAnchor1 = new w();
    this.m_localAnchor2 = new w();
    this.m_u = new w();
  };
  U.prototype.getAnchorA = function () {
    return this.m_bodyA.getWorldPoint(this.m_localAnchor1);
  };
  U.prototype.getAnchorB = function () {
    return this.m_bodyB.getWorldPoint(this.m_localAnchor2);
  };
  U.prototype.getReactionForce = function (d) {
    if (d === undefined) d = 0;
    return new w(
      d * this.m_impulse * this.m_u.x,
      d * this.m_impulse * this.m_u.y
    );
  };
  U.prototype.getReactionTorque = function () {
    return 0;
  };
  U.prototype.getlength = function () {
    return this.m_length;
  };
  U.prototype.setlength = function (d) {
    if (d === undefined) d = 0;
    this.m_length = d;
  };
  U.prototype.getFrequency = function () {
    return this.m_frequencyHz;
  };
  U.prototype.setFrequency = function (d) {
    if (d === undefined) d = 0;
    this.m_frequencyHz = d;
  };
  U.prototype.getDampingRatio = function () {
    return this.m_dampingRatio;
  };
  U.prototype.setDampingRatio = function (d) {
    if (d === undefined) d = 0;
    this.m_dampingRatio = d;
  };
  U.prototype.distanceJoint = function (d) {
    this.__super.Joint.call(this, d);
    this.m_localAnchor1.setV(d.localAnchorA);
    this.m_localAnchor2.setV(d.localAnchorB);
    this.m_length = d.length;
    this.m_frequencyHz = d.frequencyHz;
    this.m_dampingRatio = d.dampingRatio;
    this.m_bias = this.m_gamma = this.m_impulse = 0;
  };
  U.prototype.initVelocityConstraints = function (d) {
    var h,
      l = 0,
      j = this.m_bodyA,
      o = this.m_bodyB;
    h = j.m_xf.R;
    var q = this.m_localAnchor1.x - j.m_sweep.localCenter.x,
      n = this.m_localAnchor1.y - j.m_sweep.localCenter.y;
    l = h.col1.x * q + h.col2.x * n;
    n = h.col1.y * q + h.col2.y * n;
    q = l;
    h = o.m_xf.R;
    var a = this.m_localAnchor2.x - o.m_sweep.localCenter.x,
      c = this.m_localAnchor2.y - o.m_sweep.localCenter.y;
    l = h.col1.x * a + h.col2.x * c;
    c = h.col1.y * a + h.col2.y * c;
    a = l;
    this.m_u.x = o.m_sweep.c.x + a - j.m_sweep.c.x - q;
    this.m_u.y = o.m_sweep.c.y + c - j.m_sweep.c.y - n;
    l = Math.sqrt(this.m_u.x * this.m_u.x + this.m_u.y * this.m_u.y);
    l > F.LINEAR_SLOP ? this.m_u.multiply(1 / l) : this.m_u.setZero();
    h = q * this.m_u.y - n * this.m_u.x;
    var g = a * this.m_u.y - c * this.m_u.x;
    h = j.m_invMass + j.m_invI * h * h + o.m_invMass + o.m_invI * g * g;
    this.m_mass = h != 0 ? 1 / h : 0;
    if (this.m_frequencyHz > 0) {
      l = l - this.m_length;
      g = 2 * Math.PI * this.m_frequencyHz;
      var b = this.m_mass * g * g;
      this.m_gamma =
        d.dt * (2 * this.m_mass * this.m_dampingRatio * g + d.dt * b);
      this.m_gamma = this.m_gamma != 0 ? 1 / this.m_gamma : 0;
      this.m_bias = l * d.dt * b * this.m_gamma;
      this.m_mass = h + this.m_gamma;
      this.m_mass = this.m_mass != 0 ? 1 / this.m_mass : 0;
    }
    if (d.warmStarting) {
      this.m_impulse *= d.dtRatio;
      d = this.m_impulse * this.m_u.x;
      h = this.m_impulse * this.m_u.y;
      j.m_linearVelocity.x -= j.m_invMass * d;
      j.m_linearVelocity.y -= j.m_invMass * h;
      j.m_angularVelocity -= j.m_invI * (q * h - n * d);
      o.m_linearVelocity.x += o.m_invMass * d;
      o.m_linearVelocity.y += o.m_invMass * h;
      o.m_angularVelocity += o.m_invI * (a * h - c * d);
    } else this.m_impulse = 0;
  };
  U.prototype.solveVelocityConstraints = function () {
    var d,
      h = this.m_bodyA,
      l = this.m_bodyB;
    d = h.m_xf.R;
    var j = this.m_localAnchor1.x - h.m_sweep.localCenter.x,
      o = this.m_localAnchor1.y - h.m_sweep.localCenter.y,
      q = d.col1.x * j + d.col2.x * o;
    o = d.col1.y * j + d.col2.y * o;
    j = q;
    d = l.m_xf.R;
    var n = this.m_localAnchor2.x - l.m_sweep.localCenter.x,
      a = this.m_localAnchor2.y - l.m_sweep.localCenter.y;
    q = d.col1.x * n + d.col2.x * a;
    a = d.col1.y * n + d.col2.y * a;
    n = q;
    q =
      -this.m_mass *
      (this.m_u.x *
        (l.m_linearVelocity.x +
          -l.m_angularVelocity * a -
          (h.m_linearVelocity.x + -h.m_angularVelocity * o)) +
        this.m_u.y *
          (l.m_linearVelocity.y +
            l.m_angularVelocity * n -
            (h.m_linearVelocity.y + h.m_angularVelocity * j)) +
        this.m_bias +
        this.m_gamma * this.m_impulse);
    this.m_impulse += q;
    d = q * this.m_u.x;
    q = q * this.m_u.y;
    h.m_linearVelocity.x -= h.m_invMass * d;
    h.m_linearVelocity.y -= h.m_invMass * q;
    h.m_angularVelocity -= h.m_invI * (j * q - o * d);
    l.m_linearVelocity.x += l.m_invMass * d;
    l.m_linearVelocity.y += l.m_invMass * q;
    l.m_angularVelocity += l.m_invI * (n * q - a * d);
  };
  U.prototype.solvePositionConstraints = function () {
    var d;
    if (this.m_frequencyHz > 0) return true;
    var h = this.m_bodyA,
      l = this.m_bodyB;
    d = h.m_xf.R;
    var j = this.m_localAnchor1.x - h.m_sweep.localCenter.x,
      o = this.m_localAnchor1.y - h.m_sweep.localCenter.y,
      q = d.col1.x * j + d.col2.x * o;
    o = d.col1.y * j + d.col2.y * o;
    j = q;
    d = l.m_xf.R;
    var n = this.m_localAnchor2.x - l.m_sweep.localCenter.x,
      a = this.m_localAnchor2.y - l.m_sweep.localCenter.y;
    q = d.col1.x * n + d.col2.x * a;
    a = d.col1.y * n + d.col2.y * a;
    n = q;
    q = l.m_sweep.c.x + n - h.m_sweep.c.x - j;
    var c = l.m_sweep.c.y + a - h.m_sweep.c.y - o;
    d = Math.sqrt(q * q + c * c);
    q /= d;
    c /= d;
    d = d - this.m_length;
    d = y.clamp(d, -F.MAX_LINEAR_CORRECTION, F.MAX_LINEAR_CORRECTION);
    var g = -this.m_mass * d;
    this.m_u.set(q, c);
    q = g * this.m_u.x;
    c = g * this.m_u.y;
    h.m_sweep.c.x -= h.m_invMass * q;
    h.m_sweep.c.y -= h.m_invMass * c;
    h.m_sweep.a -= h.m_invI * (j * c - o * q);
    l.m_sweep.c.x += l.m_invMass * q;
    l.m_sweep.c.y += l.m_invMass * c;
    l.m_sweep.a += l.m_invI * (n * c - a * q);
    h.SynchronizeTransform();
    l.SynchronizeTransform();
    return y.abs(d) < F.LINEAR_SLOP;
  };
  Box2D.inherit(p, Box2D.Dynamics.Joints.JointDef);
  p.prototype.__super = Box2D.Dynamics.Joints.JointDef.prototype;
  p.distanceJointDef = function () {
    Box2D.Dynamics.Joints.JointDef.JointDef.apply(this, arguments);
    this.localAnchorA = new w();
    this.localAnchorB = new w();
  };
  p.prototype.distanceJointDef = function () {
    this.__super.JointDef.call(this);
    this.type = I.e_distanceJoint;
    this.length = 1;
    this.dampingRatio = this.frequencyHz = 0;
  };
  p.prototype.initialize = function (d, h, l, j) {
    this.bodyA = d;
    this.bodyB = h;
    this.localAnchorA.setV(this.bodyA.getLocalPoint(l));
    this.localAnchorB.setV(this.bodyB.getLocalPoint(j));
    d = j.x - l.x;
    l = j.y - l.y;
    this.length = Math.sqrt(d * d + l * l);
    this.dampingRatio = this.frequencyHz = 0;
  };
  Box2D.inherit(B, Box2D.Dynamics.Joints.Joint);
  B.prototype.__super = Box2D.Dynamics.Joints.Joint.prototype;
  B.FrictionJoint = function () {
    Box2D.Dynamics.Joints.Joint.Joint.apply(this, arguments);
    this.m_localAnchorA = new w();
    this.m_localAnchorB = new w();
    this.m_linearMass = new G();
    this.m_linearImpulse = new w();
  };
  B.prototype.getAnchorA = function () {
    return this.m_bodyA.getWorldPoint(this.m_localAnchorA);
  };
  B.prototype.getAnchorB = function () {
    return this.m_bodyB.getWorldPoint(this.m_localAnchorB);
  };
  B.prototype.getReactionForce = function (d) {
    if (d === undefined) d = 0;
    return new w(d * this.m_linearImpulse.x, d * this.m_linearImpulse.y);
  };
  B.prototype.getReactionTorque = function (d) {
    if (d === undefined) d = 0;
    return d * this.m_angularImpulse;
  };
  B.prototype.setmaxForce = function (d) {
    if (d === undefined) d = 0;
    this.m_maxForce = d;
  };
  B.prototype.GetmaxForce = function () {
    return this.m_maxForce;
  };
  B.prototype.setmaxTorque = function (d) {
    if (d === undefined) d = 0;
    this.m_maxTorque = d;
  };
  B.prototype.GetmaxTorque = function () {
    return this.m_maxTorque;
  };
  B.prototype.FrictionJoint = function (d) {
    this.__super.Joint.call(this, d);
    this.m_localAnchorA.setV(d.localAnchorA);
    this.m_localAnchorB.setV(d.localAnchorB);
    this.m_linearMass.setZero();
    this.m_angularMass = 0;
    this.m_linearImpulse.setZero();
    this.m_angularImpulse = 0;
    this.m_maxForce = d.maxForce;
    this.m_maxTorque = d.maxTorque;
  };
  B.prototype.initVelocityConstraints = function (d) {
    var h,
      l = 0,
      j = this.m_bodyA,
      o = this.m_bodyB;
    h = j.m_xf.R;
    var q = this.m_localAnchorA.x - j.m_sweep.localCenter.x,
      n = this.m_localAnchorA.y - j.m_sweep.localCenter.y;
    l = h.col1.x * q + h.col2.x * n;
    n = h.col1.y * q + h.col2.y * n;
    q = l;
    h = o.m_xf.R;
    var a = this.m_localAnchorB.x - o.m_sweep.localCenter.x,
      c = this.m_localAnchorB.y - o.m_sweep.localCenter.y;
    l = h.col1.x * a + h.col2.x * c;
    c = h.col1.y * a + h.col2.y * c;
    a = l;
    h = j.m_invMass;
    l = o.m_invMass;
    var g = j.m_invI,
      b = o.m_invI,
      e = new G();
    e.col1.x = h + l;
    e.col2.x = 0;
    e.col1.y = 0;
    e.col2.y = h + l;
    e.col1.x += g * n * n;
    e.col2.x += -g * q * n;
    e.col1.y += -g * q * n;
    e.col2.y += g * q * q;
    e.col1.x += b * c * c;
    e.col2.x += -b * a * c;
    e.col1.y += -b * a * c;
    e.col2.y += b * a * a;
    e.getInverse(this.m_linearMass);
    this.m_angularMass = g + b;
    if (this.m_angularMass > 0) this.m_angularMass = 1 / this.m_angularMass;
    if (d.warmStarting) {
      this.m_linearImpulse.x *= d.dtRatio;
      this.m_linearImpulse.y *= d.dtRatio;
      this.m_angularImpulse *= d.dtRatio;
      d = this.m_linearImpulse;
      j.m_linearVelocity.x -= h * d.x;
      j.m_linearVelocity.y -= h * d.y;
      j.m_angularVelocity -= g * (q * d.y - n * d.x + this.m_angularImpulse);
      o.m_linearVelocity.x += l * d.x;
      o.m_linearVelocity.y += l * d.y;
      o.m_angularVelocity += b * (a * d.y - c * d.x + this.m_angularImpulse);
    } else {
      this.m_linearImpulse.setZero();
      this.m_angularImpulse = 0;
    }
  };
  B.prototype.solveVelocityConstraints = function (d) {
    var h,
      l = 0,
      j = this.m_bodyA,
      o = this.m_bodyB,
      q = j.m_linearVelocity,
      n = j.m_angularVelocity,
      a = o.m_linearVelocity,
      c = o.m_angularVelocity,
      g = j.m_invMass,
      b = o.m_invMass,
      e = j.m_invI,
      f = o.m_invI;
    h = j.m_xf.R;
    var m = this.m_localAnchorA.x - j.m_sweep.localCenter.x,
      r = this.m_localAnchorA.y - j.m_sweep.localCenter.y;
    l = h.col1.x * m + h.col2.x * r;
    r = h.col1.y * m + h.col2.y * r;
    m = l;
    h = o.m_xf.R;
    var s = this.m_localAnchorB.x - o.m_sweep.localCenter.x,
      v = this.m_localAnchorB.y - o.m_sweep.localCenter.y;
    l = h.col1.x * s + h.col2.x * v;
    v = h.col1.y * s + h.col2.y * v;
    s = l;
    h = 0;
    l = -this.m_angularMass * (c - n);
    var t = this.m_angularImpulse;
    h = d.dt * this.m_maxTorque;
    this.m_angularImpulse = y.clamp(this.m_angularImpulse + l, -h, h);
    l = this.m_angularImpulse - t;
    n -= e * l;
    c += f * l;
    h = y.mulMV(
      this.m_linearMass,
      new w(-(a.x - c * v - q.x + n * r), -(a.y + c * s - q.y - n * m))
    );
    l = this.m_linearImpulse.copy();
    this.m_linearImpulse.add(h);
    h = d.dt * this.m_maxForce;
    if (this.m_linearImpulse.lengthSquared() > h * h) {
      this.m_linearImpulse.normalize();
      this.m_linearImpulse.multiply(h);
    }
    h = y.subtractVV(this.m_linearImpulse, l);
    q.x -= g * h.x;
    q.y -= g * h.y;
    n -= e * (m * h.y - r * h.x);
    a.x += b * h.x;
    a.y += b * h.y;
    c += f * (s * h.y - v * h.x);
    j.m_angularVelocity = n;
    o.m_angularVelocity = c;
  };
  B.prototype.solvePositionConstraints = function () {
    return true;
  };
  Box2D.inherit(Q, Box2D.Dynamics.Joints.JointDef);
  Q.prototype.__super = Box2D.Dynamics.Joints.JointDef.prototype;
  Q.FrictionJointDef = function () {
    Box2D.Dynamics.Joints.JointDef.JointDef.apply(this, arguments);
    this.localAnchorA = new w();
    this.localAnchorB = new w();
  };
  Q.prototype.FrictionJointDef = function () {
    this.__super.JointDef.call(this);
    this.type = I.e_frictionJoint;
    this.maxTorque = this.maxForce = 0;
  };
  Q.prototype.initialize = function (d, h, l) {
    this.bodyA = d;
    this.bodyB = h;
    this.localAnchorA.setV(this.bodyA.getLocalPoint(l));
    this.localAnchorB.setV(this.bodyB.getLocalPoint(l));
  };
  Box2D.inherit(V, Box2D.Dynamics.Joints.Joint);
  V.prototype.__super = Box2D.Dynamics.Joints.Joint.prototype;
  V.GearJoint = function () {
    Box2D.Dynamics.Joints.Joint.Joint.apply(this, arguments);
    this.m_groundAnchor1 = new w();
    this.m_groundAnchor2 = new w();
    this.m_localAnchor1 = new w();
    this.m_localAnchor2 = new w();
    this.m_J = new L();
  };
  V.prototype.getAnchorA = function () {
    return this.m_bodyA.getWorldPoint(this.m_localAnchor1);
  };
  V.prototype.getAnchorB = function () {
    return this.m_bodyB.getWorldPoint(this.m_localAnchor2);
  };
  V.prototype.getReactionForce = function (d) {
    if (d === undefined) d = 0;
    return new w(
      d * this.m_impulse * this.m_J.linearB.x,
      d * this.m_impulse * this.m_J.linearB.y
    );
  };
  V.prototype.getReactionTorque = function (d) {
    if (d === undefined) d = 0;
    var h = this.m_bodyB.m_xf.R,
      l = this.m_localAnchor1.x - this.m_bodyB.m_sweep.localCenter.x,
      j = this.m_localAnchor1.y - this.m_bodyB.m_sweep.localCenter.y,
      o = h.col1.x * l + h.col2.x * j;
    j = h.col1.y * l + h.col2.y * j;
    l = o;
    return (
      d *
      (this.m_impulse * this.m_J.angularB -
        l * this.m_impulse * this.m_J.linearB.y +
        j * this.m_impulse * this.m_J.linearB.x)
    );
  };
  V.prototype.getRatio = function () {
    return this.m_ratio;
  };
  V.prototype.setRatio = function (d) {
    if (d === undefined) d = 0;
    this.m_ratio = d;
  };
  V.prototype.GearJoint = function (d) {
    this.__super.Joint.call(this, d);
    var h = parseInt(d.joint1.m_type),
      l = parseInt(d.joint2.m_type);
    this.m_prismatic2 = this.m_revolute2 = this.m_prismatic1 = this.m_revolute1 = null;
    var j = 0,
      o = 0;
    this.m_ground1 = d.joint1.getBodyA();
    this.m_bodyA = d.joint1.getBodyB();
    if (h == I.e_revoluteJoint) {
      this.m_revolute1 = d.joint1 instanceof N ? d.joint1 : null;
      this.m_groundAnchor1.setV(this.m_revolute1.m_localAnchor1);
      this.m_localAnchor1.setV(this.m_revolute1.m_localAnchor2);
      j = this.m_revolute1.getJointAngle();
    } else {
      this.m_prismatic1 = d.joint1 instanceof H ? d.joint1 : null;
      this.m_groundAnchor1.setV(this.m_prismatic1.m_localAnchor1);
      this.m_localAnchor1.setV(this.m_prismatic1.m_localAnchor2);
      j = this.m_prismatic1.getJointTranslation();
    }
    this.m_ground2 = d.joint2.getBodyA();
    this.m_bodyB = d.joint2.getBodyB();
    if (l == I.e_revoluteJoint) {
      this.m_revolute2 = d.joint2 instanceof N ? d.joint2 : null;
      this.m_groundAnchor2.setV(this.m_revolute2.m_localAnchor1);
      this.m_localAnchor2.setV(this.m_revolute2.m_localAnchor2);
      o = this.m_revolute2.getJointAngle();
    } else {
      this.m_prismatic2 = d.joint2 instanceof H ? d.joint2 : null;
      this.m_groundAnchor2.setV(this.m_prismatic2.m_localAnchor1);
      this.m_localAnchor2.setV(this.m_prismatic2.m_localAnchor2);
      o = this.m_prismatic2.getJointTranslation();
    }
    this.m_ratio = d.ratio;
    this.m_constant = j + this.m_ratio * o;
    this.m_impulse = 0;
  };
  V.prototype.initVelocityConstraints = function (d) {
    var h = this.m_ground1,
      l = this.m_ground2,
      j = this.m_bodyA,
      o = this.m_bodyB,
      q = 0,
      n = 0,
      a = 0,
      c = 0,
      g = (a = 0),
      b = 0;
    this.m_J.setZero();
    if (this.m_revolute1) {
      this.m_J.angularA = -1;
      b += j.m_invI;
    } else {
      h = h.m_xf.R;
      n = this.m_prismatic1.m_localXAxis1;
      q = h.col1.x * n.x + h.col2.x * n.y;
      n = h.col1.y * n.x + h.col2.y * n.y;
      h = j.m_xf.R;
      a = this.m_localAnchor1.x - j.m_sweep.localCenter.x;
      c = this.m_localAnchor1.y - j.m_sweep.localCenter.y;
      g = h.col1.x * a + h.col2.x * c;
      c = h.col1.y * a + h.col2.y * c;
      a = g;
      a = a * n - c * q;
      this.m_J.linearA.set(-q, -n);
      this.m_J.angularA = -a;
      b += j.m_invMass + j.m_invI * a * a;
    }
    if (this.m_revolute2) {
      this.m_J.angularB = -this.m_ratio;
      b += this.m_ratio * this.m_ratio * o.m_invI;
    } else {
      h = l.m_xf.R;
      n = this.m_prismatic2.m_localXAxis1;
      q = h.col1.x * n.x + h.col2.x * n.y;
      n = h.col1.y * n.x + h.col2.y * n.y;
      h = o.m_xf.R;
      a = this.m_localAnchor2.x - o.m_sweep.localCenter.x;
      c = this.m_localAnchor2.y - o.m_sweep.localCenter.y;
      g = h.col1.x * a + h.col2.x * c;
      c = h.col1.y * a + h.col2.y * c;
      a = g;
      a = a * n - c * q;
      this.m_J.linearB.set(-this.m_ratio * q, -this.m_ratio * n);
      this.m_J.angularB = -this.m_ratio * a;
      b += this.m_ratio * this.m_ratio * (o.m_invMass + o.m_invI * a * a);
    }
    this.m_mass = b > 0 ? 1 / b : 0;
    if (d.warmStarting) {
      j.m_linearVelocity.x += j.m_invMass * this.m_impulse * this.m_J.linearA.x;
      j.m_linearVelocity.y += j.m_invMass * this.m_impulse * this.m_J.linearA.y;
      j.m_angularVelocity += j.m_invI * this.m_impulse * this.m_J.angularA;
      o.m_linearVelocity.x += o.m_invMass * this.m_impulse * this.m_J.linearB.x;
      o.m_linearVelocity.y += o.m_invMass * this.m_impulse * this.m_J.linearB.y;
      o.m_angularVelocity += o.m_invI * this.m_impulse * this.m_J.angularB;
    } else this.m_impulse = 0;
  };
  V.prototype.solveVelocityConstraints = function () {
    var d = this.m_bodyA,
      h = this.m_bodyB,
      l =
        -this.m_mass *
        this.m_J.compute(
          d.m_linearVelocity,
          d.m_angularVelocity,
          h.m_linearVelocity,
          h.m_angularVelocity
        );
    this.m_impulse += l;
    d.m_linearVelocity.x += d.m_invMass * l * this.m_J.linearA.x;
    d.m_linearVelocity.y += d.m_invMass * l * this.m_J.linearA.y;
    d.m_angularVelocity += d.m_invI * l * this.m_J.angularA;
    h.m_linearVelocity.x += h.m_invMass * l * this.m_J.linearB.x;
    h.m_linearVelocity.y += h.m_invMass * l * this.m_J.linearB.y;
    h.m_angularVelocity += h.m_invI * l * this.m_J.angularB;
  };
  V.prototype.solvePositionConstraints = function () {
    var d = this.m_bodyA,
      h = this.m_bodyB,
      l = 0,
      j = 0;
    l = this.m_revolute1
      ? this.m_revolute1.getJointAngle()
      : this.m_prismatic1.getJointTranslation();
    j = this.m_revolute2
      ? this.m_revolute2.getJointAngle()
      : this.m_prismatic2.getJointTranslation();
    l = -this.m_mass * (this.m_constant - (l + this.m_ratio * j));
    d.m_sweep.c.x += d.m_invMass * l * this.m_J.linearA.x;
    d.m_sweep.c.y += d.m_invMass * l * this.m_J.linearA.y;
    d.m_sweep.a += d.m_invI * l * this.m_J.angularA;
    h.m_sweep.c.x += h.m_invMass * l * this.m_J.linearB.x;
    h.m_sweep.c.y += h.m_invMass * l * this.m_J.linearB.y;
    h.m_sweep.a += h.m_invI * l * this.m_J.angularB;
    d.SynchronizeTransform();
    h.SynchronizeTransform();
    return 0 < F.LINEAR_SLOP;
  };
  Box2D.inherit(M, Box2D.Dynamics.Joints.JointDef);
  M.prototype.__super = Box2D.Dynamics.Joints.JointDef.prototype;
  M.GearJointDef = function () {
    Box2D.Dynamics.Joints.JointDef.JointDef.apply(this, arguments);
  };
  M.prototype.GearJointDef = function () {
    this.__super.JointDef.call(this);
    this.type = I.e_gearJoint;
    this.joint2 = this.joint1 = null;
    this.ratio = 1;
  };
  L.Jacobian = function () {
    this.linearA = new w();
    this.linearB = new w();
  };
  L.prototype.setZero = function () {
    this.linearA.setZero();
    this.angularA = 0;
    this.linearB.setZero();
    this.angularB = 0;
  };
  L.prototype.set = function (d, h, l, j) {
    if (h === undefined) h = 0;
    if (j === undefined) j = 0;
    this.linearA.setV(d);
    this.angularA = h;
    this.linearB.setV(l);
    this.angularB = j;
  };
  L.prototype.compute = function (d, h, l, j) {
    if (h === undefined) h = 0;
    if (j === undefined) j = 0;
    return (
      this.linearA.x * d.x +
      this.linearA.y * d.y +
      this.angularA * h +
      (this.linearB.x * l.x + this.linearB.y * l.y) +
      this.angularB * j
    );
  };
  I.Joint = function () {
    this.m_edgeA = new Y();
    this.m_edgeB = new Y();
    this.m_localCenterA = new w();
    this.m_localCenterB = new w();
  };
  I.prototype.getType = function () {
    return this.m_type;
  };
  I.prototype.getAnchorA = function () {
    return null;
  };
  I.prototype.getAnchorB = function () {
    return null;
  };
  I.prototype.getReactionForce = function () {
    return null;
  };
  I.prototype.getReactionTorque = function () {
    return 0;
  };
  I.prototype.getBodyA = function () {
    return this.m_bodyA;
  };
  I.prototype.getBodyB = function () {
    return this.m_bodyB;
  };
  I.prototype.getNext = function () {
    return this.m_next;
  };
  I.prototype.getUserData = function () {
    return this.m_userData;
  };
  I.prototype.setUserData = function (d) {
    this.m_userData = d;
  };
  I.prototype.isActive = function () {
    return this.m_bodyA.isActive() && this.m_bodyB.isActive();
  };
  I.create = function (d) {
    var h = null;
    switch (d.type) {
      case I.e_distanceJoint:
        h = new U(d instanceof p ? d : null);
        break;
      case I.e_mouseJoint:
        h = new u(d instanceof D ? d : null);
        break;
      case I.e_prismaticJoint:
        h = new H(d instanceof O ? d : null);
        break;
      case I.e_revoluteJoint:
        h = new N(d instanceof S ? d : null);
        break;
      case I.e_pulleyJoint:
        h = new E(d instanceof R ? d : null);
        break;
      case I.e_gearJoint:
        h = new V(d instanceof M ? d : null);
        break;
      case I.e_lineJoint:
        h = new k(d instanceof z ? d : null);
        break;
      case I.e_weldJoint:
        h = new aa(d instanceof Z ? d : null);
        break;
      case I.e_frictionJoint:
        h = new B(d instanceof Q ? d : null);
    }
    return h;
  };
  I.destroy = function () {};
  I.prototype.Joint = function (d) {
    F.assert(d.bodyA != d.bodyB);
    this.m_type = d.type;
    this.m_next = this.m_prev = null;
    this.m_bodyA = d.bodyA;
    this.m_bodyB = d.bodyB;
    this.m_collideConnected = d.collideConnected;
    this.m_islandFlag = false;
    this.m_userData = d.userData;
  };
  I.prototype.initVelocityConstraints = function () {};
  I.prototype.solveVelocityConstraints = function () {};
  I.prototype.finalizeVelocityConstraints = function () {};
  I.prototype.solvePositionConstraints = function () {
    return false;
  };
  Box2D.postDefs.push(function () {
    Box2D.Dynamics.Joints.Joint.e_unknownJoint = 0;
    Box2D.Dynamics.Joints.Joint.e_revoluteJoint = 1;
    Box2D.Dynamics.Joints.Joint.e_prismaticJoint = 2;
    Box2D.Dynamics.Joints.Joint.e_distanceJoint = 3;
    Box2D.Dynamics.Joints.Joint.e_pulleyJoint = 4;
    Box2D.Dynamics.Joints.Joint.e_mouseJoint = 5;
    Box2D.Dynamics.Joints.Joint.e_gearJoint = 6;
    Box2D.Dynamics.Joints.Joint.e_lineJoint = 7;
    Box2D.Dynamics.Joints.Joint.e_weldJoint = 8;
    Box2D.Dynamics.Joints.Joint.e_frictionJoint = 9;
    Box2D.Dynamics.Joints.Joint.e_inactiveLimit = 0;
    Box2D.Dynamics.Joints.Joint.e_atLowerLimit = 1;
    Box2D.Dynamics.Joints.Joint.e_atUpperLimit = 2;
    Box2D.Dynamics.Joints.Joint.e_equalLimits = 3;
  });
  W.JointDef = function () {};
  W.prototype.JointDef = function () {
    this.type = I.e_unknownJoint;
    this.bodyB = this.bodyA = this.userData = null;
    this.collideConnected = false;
  };
  Y.JointEdge = function () {};
  Box2D.inherit(k, Box2D.Dynamics.Joints.Joint);
  k.prototype.__super = Box2D.Dynamics.Joints.Joint.prototype;
  k.LineJoint = function () {
    Box2D.Dynamics.Joints.Joint.Joint.apply(this, arguments);
    this.m_localAnchor1 = new w();
    this.m_localAnchor2 = new w();
    this.m_localXAxis1 = new w();
    this.m_localYAxis1 = new w();
    this.m_axis = new w();
    this.m_perp = new w();
    this.m_K = new G();
    this.m_impulse = new w();
  };
  k.prototype.getAnchorA = function () {
    return this.m_bodyA.getWorldPoint(this.m_localAnchor1);
  };
  k.prototype.getAnchorB = function () {
    return this.m_bodyB.getWorldPoint(this.m_localAnchor2);
  };
  k.prototype.getReactionForce = function (d) {
    if (d === undefined) d = 0;
    return new w(
      d *
        (this.m_impulse.x * this.m_perp.x +
          (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.x),
      d *
        (this.m_impulse.x * this.m_perp.y +
          (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.y)
    );
  };
  k.prototype.getReactionTorque = function (d) {
    if (d === undefined) d = 0;
    return d * this.m_impulse.y;
  };
  k.prototype.getJointTranslation = function () {
    var d = this.m_bodyA,
      h = this.m_bodyB,
      l = d.getWorldPoint(this.m_localAnchor1),
      j = h.getWorldPoint(this.m_localAnchor2);
    h = j.x - l.x;
    l = j.y - l.y;
    d = d.getWorldVector(this.m_localXAxis1);
    return d.x * h + d.y * l;
  };
  k.prototype.getJointSpeed = function () {
    var d = this.m_bodyA,
      h = this.m_bodyB,
      l;
    l = d.m_xf.R;
    var j = this.m_localAnchor1.x - d.m_sweep.localCenter.x,
      o = this.m_localAnchor1.y - d.m_sweep.localCenter.y,
      q = l.col1.x * j + l.col2.x * o;
    o = l.col1.y * j + l.col2.y * o;
    j = q;
    l = h.m_xf.R;
    var n = this.m_localAnchor2.x - h.m_sweep.localCenter.x,
      a = this.m_localAnchor2.y - h.m_sweep.localCenter.y;
    q = l.col1.x * n + l.col2.x * a;
    a = l.col1.y * n + l.col2.y * a;
    n = q;
    l = h.m_sweep.c.x + n - (d.m_sweep.c.x + j);
    q = h.m_sweep.c.y + a - (d.m_sweep.c.y + o);
    var c = d.getWorldVector(this.m_localXAxis1),
      g = d.m_linearVelocity,
      b = h.m_linearVelocity;
    d = d.m_angularVelocity;
    h = h.m_angularVelocity;
    return (
      l * -d * c.y +
      q * d * c.x +
      (c.x * (b.x + -h * a - g.x - -d * o) + c.y * (b.y + h * n - g.y - d * j))
    );
  };
  k.prototype.isLimitEnabled = function () {
    return this.m_enableLimit;
  };
  k.prototype.enableLimit = function (d) {
    this.m_bodyA.setAwake(true);
    this.m_bodyB.setAwake(true);
    this.m_enableLimit = d;
  };
  k.prototype.getLowerLimit = function () {
    return this.m_lowerTranslation;
  };
  k.prototype.getUpperLimit = function () {
    return this.m_upperTranslation;
  };
  k.prototype.setLimits = function (d, h) {
    if (d === undefined) d = 0;
    if (h === undefined) h = 0;
    this.m_bodyA.setAwake(true);
    this.m_bodyB.setAwake(true);
    this.m_lowerTranslation = d;
    this.m_upperTranslation = h;
  };
  k.prototype.isMotorEnabled = function () {
    return this.m_enableMotor;
  };
  k.prototype.enableMotor = function (d) {
    this.m_bodyA.setAwake(true);
    this.m_bodyB.setAwake(true);
    this.m_enableMotor = d;
  };
  k.prototype.setMotorSpeed = function (d) {
    if (d === undefined) d = 0;
    this.m_bodyA.setAwake(true);
    this.m_bodyB.setAwake(true);
    this.m_motorSpeed = d;
  };
  k.prototype.getMotorSpeed = function () {
    return this.m_motorSpeed;
  };
  k.prototype.setmaxMotorForce = function (d) {
    if (d === undefined) d = 0;
    this.m_bodyA.setAwake(true);
    this.m_bodyB.setAwake(true);
    this.m_maxMotorForce = d;
  };
  k.prototype.GetmaxMotorForce = function () {
    return this.m_maxMotorForce;
  };
  k.prototype.getMotorForce = function () {
    return this.m_motorImpulse;
  };
  k.prototype.LineJoint = function (d) {
    this.__super.Joint.call(this, d);
    this.m_localAnchor1.setV(d.localAnchorA);
    this.m_localAnchor2.setV(d.localAnchorB);
    this.m_localXAxis1.setV(d.localAxisA);
    this.m_localYAxis1.x = -this.m_localXAxis1.y;
    this.m_localYAxis1.y = this.m_localXAxis1.x;
    this.m_impulse.setZero();
    this.m_motorImpulse = this.m_motorMass = 0;
    this.m_lowerTranslation = d.lowerTranslation;
    this.m_upperTranslation = d.upperTranslation;
    this.m_maxMotorForce = d.maxMotorForce;
    this.m_motorSpeed = d.motorSpeed;
    this.m_enableLimit = d.enableLimit;
    this.m_enableMotor = d.enableMotor;
    this.m_limitState = I.e_inactiveLimit;
    this.m_axis.setZero();
    this.m_perp.setZero();
  };
  k.prototype.initVelocityConstraints = function (d) {
    var h = this.m_bodyA,
      l = this.m_bodyB,
      j,
      o = 0;
    this.m_localCenterA.setV(h.getLocalCenter());
    this.m_localCenterB.setV(l.getLocalCenter());
    var q = h.getTransform();
    l.getTransform();
    j = h.m_xf.R;
    var n = this.m_localAnchor1.x - this.m_localCenterA.x,
      a = this.m_localAnchor1.y - this.m_localCenterA.y;
    o = j.col1.x * n + j.col2.x * a;
    a = j.col1.y * n + j.col2.y * a;
    n = o;
    j = l.m_xf.R;
    var c = this.m_localAnchor2.x - this.m_localCenterB.x,
      g = this.m_localAnchor2.y - this.m_localCenterB.y;
    o = j.col1.x * c + j.col2.x * g;
    g = j.col1.y * c + j.col2.y * g;
    c = o;
    j = l.m_sweep.c.x + c - h.m_sweep.c.x - n;
    o = l.m_sweep.c.y + g - h.m_sweep.c.y - a;
    this.m_invMassA = h.m_invMass;
    this.m_invMassB = l.m_invMass;
    this.m_invIA = h.m_invI;
    this.m_invIB = l.m_invI;
    this.m_axis.setV(y.mulMV(q.R, this.m_localXAxis1));
    this.m_a1 = (j + n) * this.m_axis.y - (o + a) * this.m_axis.x;
    this.m_a2 = c * this.m_axis.y - g * this.m_axis.x;
    this.m_motorMass =
      this.m_invMassA +
      this.m_invMassB +
      this.m_invIA * this.m_a1 * this.m_a1 +
      this.m_invIB * this.m_a2 * this.m_a2;
    this.m_motorMass =
      this.m_motorMass > Number.MIN_VALUE ? 1 / this.m_motorMass : 0;
    this.m_perp.setV(y.mulMV(q.R, this.m_localYAxis1));
    this.m_s1 = (j + n) * this.m_perp.y - (o + a) * this.m_perp.x;
    this.m_s2 = c * this.m_perp.y - g * this.m_perp.x;
    q = this.m_invMassA;
    n = this.m_invMassB;
    a = this.m_invIA;
    c = this.m_invIB;
    this.m_K.col1.x =
      q + n + a * this.m_s1 * this.m_s1 + c * this.m_s2 * this.m_s2;
    this.m_K.col1.y = a * this.m_s1 * this.m_a1 + c * this.m_s2 * this.m_a2;
    this.m_K.col2.x = this.m_K.col1.y;
    this.m_K.col2.y =
      q + n + a * this.m_a1 * this.m_a1 + c * this.m_a2 * this.m_a2;
    if (this.m_enableLimit) {
      j = this.m_axis.x * j + this.m_axis.y * o;
      if (
        y.abs(this.m_upperTranslation - this.m_lowerTranslation) <
        2 * F.LINEAR_SLOP
      )
        this.m_limitState = I.e_equalLimits;
      else if (j <= this.m_lowerTranslation) {
        if (this.m_limitState != I.e_atLowerLimit) {
          this.m_limitState = I.e_atLowerLimit;
          this.m_impulse.y = 0;
        }
      } else if (j >= this.m_upperTranslation) {
        if (this.m_limitState != I.e_atUpperLimit) {
          this.m_limitState = I.e_atUpperLimit;
          this.m_impulse.y = 0;
        }
      } else {
        this.m_limitState = I.e_inactiveLimit;
        this.m_impulse.y = 0;
      }
    } else this.m_limitState = I.e_inactiveLimit;
    if (this.m_enableMotor == false) this.m_motorImpulse = 0;
    if (d.warmStarting) {
      this.m_impulse.x *= d.dtRatio;
      this.m_impulse.y *= d.dtRatio;
      this.m_motorImpulse *= d.dtRatio;
      d =
        this.m_impulse.x * this.m_perp.x +
        (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.x;
      j =
        this.m_impulse.x * this.m_perp.y +
        (this.m_motorImpulse + this.m_impulse.y) * this.m_axis.y;
      o =
        this.m_impulse.x * this.m_s1 +
        (this.m_motorImpulse + this.m_impulse.y) * this.m_a1;
      q =
        this.m_impulse.x * this.m_s2 +
        (this.m_motorImpulse + this.m_impulse.y) * this.m_a2;
      h.m_linearVelocity.x -= this.m_invMassA * d;
      h.m_linearVelocity.y -= this.m_invMassA * j;
      h.m_angularVelocity -= this.m_invIA * o;
      l.m_linearVelocity.x += this.m_invMassB * d;
      l.m_linearVelocity.y += this.m_invMassB * j;
      l.m_angularVelocity += this.m_invIB * q;
    } else {
      this.m_impulse.setZero();
      this.m_motorImpulse = 0;
    }
  };
  k.prototype.solveVelocityConstraints = function (d) {
    var h = this.m_bodyA,
      l = this.m_bodyB,
      j = h.m_linearVelocity,
      o = h.m_angularVelocity,
      q = l.m_linearVelocity,
      n = l.m_angularVelocity,
      a = 0,
      c = 0,
      g = 0,
      b = 0;
    if (this.m_enableMotor && this.m_limitState != I.e_equalLimits) {
      b =
        this.m_motorMass *
        (this.m_motorSpeed -
          (this.m_axis.x * (q.x - j.x) +
            this.m_axis.y * (q.y - j.y) +
            this.m_a2 * n -
            this.m_a1 * o));
      a = this.m_motorImpulse;
      c = d.dt * this.m_maxMotorForce;
      this.m_motorImpulse = y.clamp(this.m_motorImpulse + b, -c, c);
      b = this.m_motorImpulse - a;
      a = b * this.m_axis.x;
      c = b * this.m_axis.y;
      g = b * this.m_a1;
      b = b * this.m_a2;
      j.x -= this.m_invMassA * a;
      j.y -= this.m_invMassA * c;
      o -= this.m_invIA * g;
      q.x += this.m_invMassB * a;
      q.y += this.m_invMassB * c;
      n += this.m_invIB * b;
    }
    c =
      this.m_perp.x * (q.x - j.x) +
      this.m_perp.y * (q.y - j.y) +
      this.m_s2 * n -
      this.m_s1 * o;
    if (this.m_enableLimit && this.m_limitState != I.e_inactiveLimit) {
      g =
        this.m_axis.x * (q.x - j.x) +
        this.m_axis.y * (q.y - j.y) +
        this.m_a2 * n -
        this.m_a1 * o;
      a = this.m_impulse.copy();
      d = this.m_K.solve(new w(), -c, -g);
      this.m_impulse.add(d);
      if (this.m_limitState == I.e_atLowerLimit)
        this.m_impulse.y = y.max(this.m_impulse.y, 0);
      else if (this.m_limitState == I.e_atUpperLimit)
        this.m_impulse.y = y.min(this.m_impulse.y, 0);
      c = -c - (this.m_impulse.y - a.y) * this.m_K.col2.x;
      g = 0;
      g = this.m_K.col1.x != 0 ? c / this.m_K.col1.x + a.x : a.x;
      this.m_impulse.x = g;
      d.x = this.m_impulse.x - a.x;
      d.y = this.m_impulse.y - a.y;
      a = d.x * this.m_perp.x + d.y * this.m_axis.x;
      c = d.x * this.m_perp.y + d.y * this.m_axis.y;
      g = d.x * this.m_s1 + d.y * this.m_a1;
      b = d.x * this.m_s2 + d.y * this.m_a2;
    } else {
      d = 0;
      d = this.m_K.col1.x != 0 ? -c / this.m_K.col1.x : 0;
      this.m_impulse.x += d;
      a = d * this.m_perp.x;
      c = d * this.m_perp.y;
      g = d * this.m_s1;
      b = d * this.m_s2;
    }
    j.x -= this.m_invMassA * a;
    j.y -= this.m_invMassA * c;
    o -= this.m_invIA * g;
    q.x += this.m_invMassB * a;
    q.y += this.m_invMassB * c;
    n += this.m_invIB * b;
    h.m_linearVelocity.setV(j);
    h.m_angularVelocity = o;
    l.m_linearVelocity.setV(q);
    l.m_angularVelocity = n;
  };
  k.prototype.solvePositionConstraints = function () {
    var d = this.m_bodyA,
      h = this.m_bodyB,
      l = d.m_sweep.c,
      j = d.m_sweep.a,
      o = h.m_sweep.c,
      q = h.m_sweep.a,
      n,
      a = 0,
      c = 0,
      g = 0,
      b = 0,
      e = (n = 0),
      f = 0;
    c = false;
    var m = 0,
      r = G.fromAngle(j);
    g = G.fromAngle(q);
    n = r;
    f = this.m_localAnchor1.x - this.m_localCenterA.x;
    var s = this.m_localAnchor1.y - this.m_localCenterA.y;
    a = n.col1.x * f + n.col2.x * s;
    s = n.col1.y * f + n.col2.y * s;
    f = a;
    n = g;
    g = this.m_localAnchor2.x - this.m_localCenterB.x;
    b = this.m_localAnchor2.y - this.m_localCenterB.y;
    a = n.col1.x * g + n.col2.x * b;
    b = n.col1.y * g + n.col2.y * b;
    g = a;
    n = o.x + g - l.x - f;
    a = o.y + b - l.y - s;
    if (this.m_enableLimit) {
      this.m_axis = y.mulMV(r, this.m_localXAxis1);
      this.m_a1 = (n + f) * this.m_axis.y - (a + s) * this.m_axis.x;
      this.m_a2 = g * this.m_axis.y - b * this.m_axis.x;
      var v = this.m_axis.x * n + this.m_axis.y * a;
      if (
        y.abs(this.m_upperTranslation - this.m_lowerTranslation) <
        2 * F.LINEAR_SLOP
      ) {
        m = y.clamp(v, -F.MAX_LINEAR_CORRECTION, F.MAX_LINEAR_CORRECTION);
        e = y.abs(v);
        c = true;
      } else if (v <= this.m_lowerTranslation) {
        m = y.clamp(
          v - this.m_lowerTranslation + F.LINEAR_SLOP,
          -F.MAX_LINEAR_CORRECTION,
          0
        );
        e = this.m_lowerTranslation - v;
        c = true;
      } else if (v >= this.m_upperTranslation) {
        m = y.clamp(
          v - this.m_upperTranslation + F.LINEAR_SLOP,
          0,
          F.MAX_LINEAR_CORRECTION
        );
        e = v - this.m_upperTranslation;
        c = true;
      }
    }
    this.m_perp = y.mulMV(r, this.m_localYAxis1);
    this.m_s1 = (n + f) * this.m_perp.y - (a + s) * this.m_perp.x;
    this.m_s2 = g * this.m_perp.y - b * this.m_perp.x;
    r = new w();
    s = this.m_perp.x * n + this.m_perp.y * a;
    e = y.max(e, y.abs(s));
    f = 0;
    if (c) {
      c = this.m_invMassA;
      g = this.m_invMassB;
      b = this.m_invIA;
      n = this.m_invIB;
      this.m_K.col1.x =
        c + g + b * this.m_s1 * this.m_s1 + n * this.m_s2 * this.m_s2;
      this.m_K.col1.y = b * this.m_s1 * this.m_a1 + n * this.m_s2 * this.m_a2;
      this.m_K.col2.x = this.m_K.col1.y;
      this.m_K.col2.y =
        c + g + b * this.m_a1 * this.m_a1 + n * this.m_a2 * this.m_a2;
      this.m_K.solve(r, -s, -m);
    } else {
      c = this.m_invMassA;
      g = this.m_invMassB;
      b = this.m_invIA;
      n = this.m_invIB;
      m = c + g + b * this.m_s1 * this.m_s1 + n * this.m_s2 * this.m_s2;
      c = 0;
      c = m != 0 ? -s / m : 0;
      r.x = c;
      r.y = 0;
    }
    m = r.x * this.m_perp.x + r.y * this.m_axis.x;
    c = r.x * this.m_perp.y + r.y * this.m_axis.y;
    s = r.x * this.m_s1 + r.y * this.m_a1;
    r = r.x * this.m_s2 + r.y * this.m_a2;
    l.x -= this.m_invMassA * m;
    l.y -= this.m_invMassA * c;
    j -= this.m_invIA * s;
    o.x += this.m_invMassB * m;
    o.y += this.m_invMassB * c;
    q += this.m_invIB * r;
    d.m_sweep.a = j;
    h.m_sweep.a = q;
    d.SynchronizeTransform();
    h.SynchronizeTransform();
    return e <= F.LINEAR_SLOP && f <= F.ANGULAR_SLOP;
  };
  Box2D.inherit(z, Box2D.Dynamics.Joints.JointDef);
  z.prototype.__super = Box2D.Dynamics.Joints.JointDef.prototype;
  z.LineJointDef = function () {
    Box2D.Dynamics.Joints.JointDef.JointDef.apply(this, arguments);
    this.localAnchorA = new w();
    this.localAnchorB = new w();
    this.localAxisA = new w();
  };
  z.prototype.LineJointDef = function () {
    this.__super.JointDef.call(this);
    this.type = I.e_lineJoint;
    this.localAxisA.set(1, 0);
    this.enableLimit = false;
    this.upperTranslation = this.lowerTranslation = 0;
    this.enableMotor = false;
    this.motorSpeed = this.maxMotorForce = 0;
  };
  z.prototype.initialize = function (d, h, l, j) {
    this.bodyA = d;
    this.bodyB = h;
    this.localAnchorA = this.bodyA.getLocalPoint(l);
    this.localAnchorB = this.bodyB.getLocalPoint(l);
    this.localAxisA = this.bodyA.getLocalVector(j);
  };
  Box2D.inherit(u, Box2D.Dynamics.Joints.Joint);
  u.prototype.__super = Box2D.Dynamics.Joints.Joint.prototype;
  u.MouseJoint = function () {
    Box2D.Dynamics.Joints.Joint.Joint.apply(this, arguments);
    this.K = new G();
    this.K1 = new G();
    this.K2 = new G();
    this.m_localAnchor = new w();
    this.m_target = new w();
    this.m_impulse = new w();
    this.m_mass = new G();
    this.m_C = new w();
  };
  u.prototype.getAnchorA = function () {
    return this.m_target;
  };
  u.prototype.getAnchorB = function () {
    return this.m_bodyB.getWorldPoint(this.m_localAnchor);
  };
  u.prototype.getReactionForce = function (d) {
    if (d === undefined) d = 0;
    return new w(d * this.m_impulse.x, d * this.m_impulse.y);
  };
  u.prototype.getReactionTorque = function () {
    return 0;
  };
  u.prototype.getTarget = function () {
    return this.m_target;
  };
  u.prototype.setTarget = function (d) {
    this.m_bodyB.isAwake() == false && this.m_bodyB.setAwake(true);
    this.m_target = d;
  };
  u.prototype.GetmaxForce = function () {
    return this.m_maxForce;
  };
  u.prototype.setmaxForce = function (d) {
    if (d === undefined) d = 0;
    this.m_maxForce = d;
  };
  u.prototype.getFrequency = function () {
    return this.m_frequencyHz;
  };
  u.prototype.setFrequency = function (d) {
    if (d === undefined) d = 0;
    this.m_frequencyHz = d;
  };
  u.prototype.getDampingRatio = function () {
    return this.m_dampingRatio;
  };
  u.prototype.setDampingRatio = function (d) {
    if (d === undefined) d = 0;
    this.m_dampingRatio = d;
  };
  u.prototype.MouseJoint = function (d) {
    this.__super.Joint.call(this, d);
    this.m_target.setV(d.target);
    var h = this.m_target.x - this.m_bodyB.m_xf.position.x,
      l = this.m_target.y - this.m_bodyB.m_xf.position.y,
      j = this.m_bodyB.m_xf.R;
    this.m_localAnchor.x = h * j.col1.x + l * j.col1.y;
    this.m_localAnchor.y = h * j.col2.x + l * j.col2.y;
    this.m_maxForce = d.maxForce;
    this.m_impulse.setZero();
    this.m_frequencyHz = d.frequencyHz;
    this.m_dampingRatio = d.dampingRatio;
    this.m_gamma = this.m_beta = 0;
  };
  u.prototype.initVelocityConstraints = function (d) {
    var h = this.m_bodyB,
      l = h.getMass(),
      j = 2 * Math.PI * this.m_frequencyHz,
      o = l * j * j;
    this.m_gamma = d.dt * (2 * l * this.m_dampingRatio * j + d.dt * o);
    this.m_gamma = this.m_gamma != 0 ? 1 / this.m_gamma : 0;
    this.m_beta = d.dt * o * this.m_gamma;
    o = h.m_xf.R;
    l = this.m_localAnchor.x - h.m_sweep.localCenter.x;
    j = this.m_localAnchor.y - h.m_sweep.localCenter.y;
    var q = o.col1.x * l + o.col2.x * j;
    j = o.col1.y * l + o.col2.y * j;
    l = q;
    o = h.m_invMass;
    q = h.m_invI;
    this.K1.col1.x = o;
    this.K1.col2.x = 0;
    this.K1.col1.y = 0;
    this.K1.col2.y = o;
    this.K2.col1.x = q * j * j;
    this.K2.col2.x = -q * l * j;
    this.K2.col1.y = -q * l * j;
    this.K2.col2.y = q * l * l;
    this.K.setM(this.K1);
    this.K.addM(this.K2);
    this.K.col1.x += this.m_gamma;
    this.K.col2.y += this.m_gamma;
    this.K.getInverse(this.m_mass);
    this.m_C.x = h.m_sweep.c.x + l - this.m_target.x;
    this.m_C.y = h.m_sweep.c.y + j - this.m_target.y;
    h.m_angularVelocity *= 0.98;
    this.m_impulse.x *= d.dtRatio;
    this.m_impulse.y *= d.dtRatio;
    h.m_linearVelocity.x += o * this.m_impulse.x;
    h.m_linearVelocity.y += o * this.m_impulse.y;
    h.m_angularVelocity += q * (l * this.m_impulse.y - j * this.m_impulse.x);
  };
  u.prototype.solveVelocityConstraints = function (d) {
    var h = this.m_bodyB,
      l,
      j = 0,
      o = 0;
    l = h.m_xf.R;
    var q = this.m_localAnchor.x - h.m_sweep.localCenter.x,
      n = this.m_localAnchor.y - h.m_sweep.localCenter.y;
    j = l.col1.x * q + l.col2.x * n;
    n = l.col1.y * q + l.col2.y * n;
    q = j;
    j = h.m_linearVelocity.x + -h.m_angularVelocity * n;
    var a = h.m_linearVelocity.y + h.m_angularVelocity * q;
    l = this.m_mass;
    j = j + this.m_beta * this.m_C.x + this.m_gamma * this.m_impulse.x;
    o = a + this.m_beta * this.m_C.y + this.m_gamma * this.m_impulse.y;
    a = -(l.col1.x * j + l.col2.x * o);
    o = -(l.col1.y * j + l.col2.y * o);
    l = this.m_impulse.x;
    j = this.m_impulse.y;
    this.m_impulse.x += a;
    this.m_impulse.y += o;
    d = d.dt * this.m_maxForce;
    this.m_impulse.lengthSquared() > d * d &&
      this.m_impulse.multiply(d / this.m_impulse.length());
    a = this.m_impulse.x - l;
    o = this.m_impulse.y - j;
    h.m_linearVelocity.x += h.m_invMass * a;
    h.m_linearVelocity.y += h.m_invMass * o;
    h.m_angularVelocity += h.m_invI * (q * o - n * a);
  };
  u.prototype.solvePositionConstraints = function () {
    return true;
  };
  Box2D.inherit(D, Box2D.Dynamics.Joints.JointDef);
  D.prototype.__super = Box2D.Dynamics.Joints.JointDef.prototype;
  D.MouseJointDef = function () {
    Box2D.Dynamics.Joints.JointDef.JointDef.apply(this, arguments);
    this.target = new w();
  };
  D.prototype.MouseJointDef = function () {
    this.__super.JointDef.call(this);
    this.type = I.e_mouseJoint;
    this.maxForce = 0;
    this.frequencyHz = 5;
    this.dampingRatio = 0.7;
  };
  Box2D.inherit(H, Box2D.Dynamics.Joints.Joint);
  H.prototype.__super = Box2D.Dynamics.Joints.Joint.prototype;
  H.PrismaticJoint = function () {
    Box2D.Dynamics.Joints.Joint.Joint.apply(this, arguments);
    this.m_localAnchor1 = new w();
    this.m_localAnchor2 = new w();
    this.m_localXAxis1 = new w();
    this.m_localYAxis1 = new w();
    this.m_axis = new w();
    this.m_perp = new w();
    this.m_K = new K();
    this.m_impulse = new A();
  };
  H.prototype.getAnchorA = function () {
    return this.m_bodyA.getWorldPoint(this.m_localAnchor1);
  };
  H.prototype.getAnchorB = function () {
    return this.m_bodyB.getWorldPoint(this.m_localAnchor2);
  };
  H.prototype.getReactionForce = function (d) {
    if (d === undefined) d = 0;
    return new w(
      d *
        (this.m_impulse.x * this.m_perp.x +
          (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.x),
      d *
        (this.m_impulse.x * this.m_perp.y +
          (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.y)
    );
  };
  H.prototype.getReactionTorque = function (d) {
    if (d === undefined) d = 0;
    return d * this.m_impulse.y;
  };
  H.prototype.getJointTranslation = function () {
    var d = this.m_bodyA,
      h = this.m_bodyB,
      l = d.getWorldPoint(this.m_localAnchor1),
      j = h.getWorldPoint(this.m_localAnchor2);
    h = j.x - l.x;
    l = j.y - l.y;
    d = d.getWorldVector(this.m_localXAxis1);
    return d.x * h + d.y * l;
  };
  H.prototype.getJointSpeed = function () {
    var d = this.m_bodyA,
      h = this.m_bodyB,
      l;
    l = d.m_xf.R;
    var j = this.m_localAnchor1.x - d.m_sweep.localCenter.x,
      o = this.m_localAnchor1.y - d.m_sweep.localCenter.y,
      q = l.col1.x * j + l.col2.x * o;
    o = l.col1.y * j + l.col2.y * o;
    j = q;
    l = h.m_xf.R;
    var n = this.m_localAnchor2.x - h.m_sweep.localCenter.x,
      a = this.m_localAnchor2.y - h.m_sweep.localCenter.y;
    q = l.col1.x * n + l.col2.x * a;
    a = l.col1.y * n + l.col2.y * a;
    n = q;
    l = h.m_sweep.c.x + n - (d.m_sweep.c.x + j);
    q = h.m_sweep.c.y + a - (d.m_sweep.c.y + o);
    var c = d.getWorldVector(this.m_localXAxis1),
      g = d.m_linearVelocity,
      b = h.m_linearVelocity;
    d = d.m_angularVelocity;
    h = h.m_angularVelocity;
    return (
      l * -d * c.y +
      q * d * c.x +
      (c.x * (b.x + -h * a - g.x - -d * o) + c.y * (b.y + h * n - g.y - d * j))
    );
  };
  H.prototype.isLimitEnabled = function () {
    return this.m_enableLimit;
  };
  H.prototype.enableLimit = function (d) {
    this.m_bodyA.setAwake(true);
    this.m_bodyB.setAwake(true);
    this.m_enableLimit = d;
  };
  H.prototype.getLowerLimit = function () {
    return this.m_lowerTranslation;
  };
  H.prototype.getUpperLimit = function () {
    return this.m_upperTranslation;
  };
  H.prototype.setLimits = function (d, h) {
    if (d === undefined) d = 0;
    if (h === undefined) h = 0;
    this.m_bodyA.setAwake(true);
    this.m_bodyB.setAwake(true);
    this.m_lowerTranslation = d;
    this.m_upperTranslation = h;
  };
  H.prototype.isMotorEnabled = function () {
    return this.m_enableMotor;
  };
  H.prototype.enableMotor = function (d) {
    this.m_bodyA.setAwake(true);
    this.m_bodyB.setAwake(true);
    this.m_enableMotor = d;
  };
  H.prototype.setMotorSpeed = function (d) {
    if (d === undefined) d = 0;
    this.m_bodyA.setAwake(true);
    this.m_bodyB.setAwake(true);
    this.m_motorSpeed = d;
  };
  H.prototype.getMotorSpeed = function () {
    return this.m_motorSpeed;
  };
  H.prototype.setmaxMotorForce = function (d) {
    if (d === undefined) d = 0;
    this.m_bodyA.setAwake(true);
    this.m_bodyB.setAwake(true);
    this.m_maxMotorForce = d;
  };
  H.prototype.getMotorForce = function () {
    return this.m_motorImpulse;
  };
  H.prototype.PrismaticJoint = function (d) {
    this.__super.Joint.call(this, d);
    this.m_localAnchor1.setV(d.localAnchorA);
    this.m_localAnchor2.setV(d.localAnchorB);
    this.m_localXAxis1.setV(d.localAxisA);
    this.m_localYAxis1.x = -this.m_localXAxis1.y;
    this.m_localYAxis1.y = this.m_localXAxis1.x;
    this.m_refAngle = d.referenceAngle;
    this.m_impulse.setZero();
    this.m_motorImpulse = this.m_motorMass = 0;
    this.m_lowerTranslation = d.lowerTranslation;
    this.m_upperTranslation = d.upperTranslation;
    this.m_maxMotorForce = d.maxMotorForce;
    this.m_motorSpeed = d.motorSpeed;
    this.m_enableLimit = d.enableLimit;
    this.m_enableMotor = d.enableMotor;
    this.m_limitState = I.e_inactiveLimit;
    this.m_axis.setZero();
    this.m_perp.setZero();
  };
  H.prototype.initVelocityConstraints = function (d) {
    var h = this.m_bodyA,
      l = this.m_bodyB,
      j,
      o = 0;
    this.m_localCenterA.setV(h.getLocalCenter());
    this.m_localCenterB.setV(l.getLocalCenter());
    var q = h.getTransform();
    l.getTransform();
    j = h.m_xf.R;
    var n = this.m_localAnchor1.x - this.m_localCenterA.x,
      a = this.m_localAnchor1.y - this.m_localCenterA.y;
    o = j.col1.x * n + j.col2.x * a;
    a = j.col1.y * n + j.col2.y * a;
    n = o;
    j = l.m_xf.R;
    var c = this.m_localAnchor2.x - this.m_localCenterB.x,
      g = this.m_localAnchor2.y - this.m_localCenterB.y;
    o = j.col1.x * c + j.col2.x * g;
    g = j.col1.y * c + j.col2.y * g;
    c = o;
    j = l.m_sweep.c.x + c - h.m_sweep.c.x - n;
    o = l.m_sweep.c.y + g - h.m_sweep.c.y - a;
    this.m_invMassA = h.m_invMass;
    this.m_invMassB = l.m_invMass;
    this.m_invIA = h.m_invI;
    this.m_invIB = l.m_invI;
    this.m_axis.setV(y.mulMV(q.R, this.m_localXAxis1));
    this.m_a1 = (j + n) * this.m_axis.y - (o + a) * this.m_axis.x;
    this.m_a2 = c * this.m_axis.y - g * this.m_axis.x;
    this.m_motorMass =
      this.m_invMassA +
      this.m_invMassB +
      this.m_invIA * this.m_a1 * this.m_a1 +
      this.m_invIB * this.m_a2 * this.m_a2;
    if (this.m_motorMass > Number.MIN_VALUE)
      this.m_motorMass = 1 / this.m_motorMass;
    this.m_perp.setV(y.mulMV(q.R, this.m_localYAxis1));
    this.m_s1 = (j + n) * this.m_perp.y - (o + a) * this.m_perp.x;
    this.m_s2 = c * this.m_perp.y - g * this.m_perp.x;
    q = this.m_invMassA;
    n = this.m_invMassB;
    a = this.m_invIA;
    c = this.m_invIB;
    this.m_K.col1.x =
      q + n + a * this.m_s1 * this.m_s1 + c * this.m_s2 * this.m_s2;
    this.m_K.col1.y = a * this.m_s1 + c * this.m_s2;
    this.m_K.col1.z = a * this.m_s1 * this.m_a1 + c * this.m_s2 * this.m_a2;
    this.m_K.col2.x = this.m_K.col1.y;
    this.m_K.col2.y = a + c;
    this.m_K.col2.z = a * this.m_a1 + c * this.m_a2;
    this.m_K.col3.x = this.m_K.col1.z;
    this.m_K.col3.y = this.m_K.col2.z;
    this.m_K.col3.z =
      q + n + a * this.m_a1 * this.m_a1 + c * this.m_a2 * this.m_a2;
    if (this.m_enableLimit) {
      j = this.m_axis.x * j + this.m_axis.y * o;
      if (
        y.abs(this.m_upperTranslation - this.m_lowerTranslation) <
        2 * F.LINEAR_SLOP
      )
        this.m_limitState = I.e_equalLimits;
      else if (j <= this.m_lowerTranslation) {
        if (this.m_limitState != I.e_atLowerLimit) {
          this.m_limitState = I.e_atLowerLimit;
          this.m_impulse.z = 0;
        }
      } else if (j >= this.m_upperTranslation) {
        if (this.m_limitState != I.e_atUpperLimit) {
          this.m_limitState = I.e_atUpperLimit;
          this.m_impulse.z = 0;
        }
      } else {
        this.m_limitState = I.e_inactiveLimit;
        this.m_impulse.z = 0;
      }
    } else this.m_limitState = I.e_inactiveLimit;
    if (this.m_enableMotor == false) this.m_motorImpulse = 0;
    if (d.warmStarting) {
      this.m_impulse.x *= d.dtRatio;
      this.m_impulse.y *= d.dtRatio;
      this.m_motorImpulse *= d.dtRatio;
      d =
        this.m_impulse.x * this.m_perp.x +
        (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.x;
      j =
        this.m_impulse.x * this.m_perp.y +
        (this.m_motorImpulse + this.m_impulse.z) * this.m_axis.y;
      o =
        this.m_impulse.x * this.m_s1 +
        this.m_impulse.y +
        (this.m_motorImpulse + this.m_impulse.z) * this.m_a1;
      q =
        this.m_impulse.x * this.m_s2 +
        this.m_impulse.y +
        (this.m_motorImpulse + this.m_impulse.z) * this.m_a2;
      h.m_linearVelocity.x -= this.m_invMassA * d;
      h.m_linearVelocity.y -= this.m_invMassA * j;
      h.m_angularVelocity -= this.m_invIA * o;
      l.m_linearVelocity.x += this.m_invMassB * d;
      l.m_linearVelocity.y += this.m_invMassB * j;
      l.m_angularVelocity += this.m_invIB * q;
    } else {
      this.m_impulse.setZero();
      this.m_motorImpulse = 0;
    }
  };
  H.prototype.solveVelocityConstraints = function (d) {
    var h = this.m_bodyA,
      l = this.m_bodyB,
      j = h.m_linearVelocity,
      o = h.m_angularVelocity,
      q = l.m_linearVelocity,
      n = l.m_angularVelocity,
      a = 0,
      c = 0,
      g = 0,
      b = 0;
    if (this.m_enableMotor && this.m_limitState != I.e_equalLimits) {
      b =
        this.m_motorMass *
        (this.m_motorSpeed -
          (this.m_axis.x * (q.x - j.x) +
            this.m_axis.y * (q.y - j.y) +
            this.m_a2 * n -
            this.m_a1 * o));
      a = this.m_motorImpulse;
      d = d.dt * this.m_maxMotorForce;
      this.m_motorImpulse = y.clamp(this.m_motorImpulse + b, -d, d);
      b = this.m_motorImpulse - a;
      a = b * this.m_axis.x;
      c = b * this.m_axis.y;
      g = b * this.m_a1;
      b = b * this.m_a2;
      j.x -= this.m_invMassA * a;
      j.y -= this.m_invMassA * c;
      o -= this.m_invIA * g;
      q.x += this.m_invMassB * a;
      q.y += this.m_invMassB * c;
      n += this.m_invIB * b;
    }
    g =
      this.m_perp.x * (q.x - j.x) +
      this.m_perp.y * (q.y - j.y) +
      this.m_s2 * n -
      this.m_s1 * o;
    c = n - o;
    if (this.m_enableLimit && this.m_limitState != I.e_inactiveLimit) {
      d =
        this.m_axis.x * (q.x - j.x) +
        this.m_axis.y * (q.y - j.y) +
        this.m_a2 * n -
        this.m_a1 * o;
      a = this.m_impulse.copy();
      d = this.m_K.solve33(new A(), -g, -c, -d);
      this.m_impulse.add(d);
      if (this.m_limitState == I.e_atLowerLimit)
        this.m_impulse.z = y.max(this.m_impulse.z, 0);
      else if (this.m_limitState == I.e_atUpperLimit)
        this.m_impulse.z = y.min(this.m_impulse.z, 0);
      g = -g - (this.m_impulse.z - a.z) * this.m_K.col3.x;
      c = -c - (this.m_impulse.z - a.z) * this.m_K.col3.y;
      c = this.m_K.solve22(new w(), g, c);
      c.x += a.x;
      c.y += a.y;
      this.m_impulse.x = c.x;
      this.m_impulse.y = c.y;
      d.x = this.m_impulse.x - a.x;
      d.y = this.m_impulse.y - a.y;
      d.z = this.m_impulse.z - a.z;
      a = d.x * this.m_perp.x + d.z * this.m_axis.x;
      c = d.x * this.m_perp.y + d.z * this.m_axis.y;
      g = d.x * this.m_s1 + d.y + d.z * this.m_a1;
      b = d.x * this.m_s2 + d.y + d.z * this.m_a2;
    } else {
      d = this.m_K.solve22(new w(), -g, -c);
      this.m_impulse.x += d.x;
      this.m_impulse.y += d.y;
      a = d.x * this.m_perp.x;
      c = d.x * this.m_perp.y;
      g = d.x * this.m_s1 + d.y;
      b = d.x * this.m_s2 + d.y;
    }
    j.x -= this.m_invMassA * a;
    j.y -= this.m_invMassA * c;
    o -= this.m_invIA * g;
    q.x += this.m_invMassB * a;
    q.y += this.m_invMassB * c;
    n += this.m_invIB * b;
    h.m_linearVelocity.setV(j);
    h.m_angularVelocity = o;
    l.m_linearVelocity.setV(q);
    l.m_angularVelocity = n;
  };
  H.prototype.solvePositionConstraints = function () {
    var d = this.m_bodyA,
      h = this.m_bodyB,
      l = d.m_sweep.c,
      j = d.m_sweep.a,
      o = h.m_sweep.c,
      q = h.m_sweep.a,
      n,
      a = 0,
      c = 0,
      g = 0,
      b = (a = n = 0),
      e = 0;
    c = false;
    var f = 0,
      m = G.fromAngle(j),
      r = G.fromAngle(q);
    n = m;
    e = this.m_localAnchor1.x - this.m_localCenterA.x;
    var s = this.m_localAnchor1.y - this.m_localCenterA.y;
    a = n.col1.x * e + n.col2.x * s;
    s = n.col1.y * e + n.col2.y * s;
    e = a;
    n = r;
    r = this.m_localAnchor2.x - this.m_localCenterB.x;
    g = this.m_localAnchor2.y - this.m_localCenterB.y;
    a = n.col1.x * r + n.col2.x * g;
    g = n.col1.y * r + n.col2.y * g;
    r = a;
    n = o.x + r - l.x - e;
    a = o.y + g - l.y - s;
    if (this.m_enableLimit) {
      this.m_axis = y.mulMV(m, this.m_localXAxis1);
      this.m_a1 = (n + e) * this.m_axis.y - (a + s) * this.m_axis.x;
      this.m_a2 = r * this.m_axis.y - g * this.m_axis.x;
      var v = this.m_axis.x * n + this.m_axis.y * a;
      if (
        y.abs(this.m_upperTranslation - this.m_lowerTranslation) <
        2 * F.LINEAR_SLOP
      ) {
        f = y.clamp(v, -F.MAX_LINEAR_CORRECTION, F.MAX_LINEAR_CORRECTION);
        b = y.abs(v);
        c = true;
      } else if (v <= this.m_lowerTranslation) {
        f = y.clamp(
          v - this.m_lowerTranslation + F.LINEAR_SLOP,
          -F.MAX_LINEAR_CORRECTION,
          0
        );
        b = this.m_lowerTranslation - v;
        c = true;
      } else if (v >= this.m_upperTranslation) {
        f = y.clamp(
          v - this.m_upperTranslation + F.LINEAR_SLOP,
          0,
          F.MAX_LINEAR_CORRECTION
        );
        b = v - this.m_upperTranslation;
        c = true;
      }
    }
    this.m_perp = y.mulMV(m, this.m_localYAxis1);
    this.m_s1 = (n + e) * this.m_perp.y - (a + s) * this.m_perp.x;
    this.m_s2 = r * this.m_perp.y - g * this.m_perp.x;
    m = new A();
    s = this.m_perp.x * n + this.m_perp.y * a;
    r = q - j - this.m_refAngle;
    b = y.max(b, y.abs(s));
    e = y.abs(r);
    if (c) {
      c = this.m_invMassA;
      g = this.m_invMassB;
      n = this.m_invIA;
      a = this.m_invIB;
      this.m_K.col1.x =
        c + g + n * this.m_s1 * this.m_s1 + a * this.m_s2 * this.m_s2;
      this.m_K.col1.y = n * this.m_s1 + a * this.m_s2;
      this.m_K.col1.z = n * this.m_s1 * this.m_a1 + a * this.m_s2 * this.m_a2;
      this.m_K.col2.x = this.m_K.col1.y;
      this.m_K.col2.y = n + a;
      this.m_K.col2.z = n * this.m_a1 + a * this.m_a2;
      this.m_K.col3.x = this.m_K.col1.z;
      this.m_K.col3.y = this.m_K.col2.z;
      this.m_K.col3.z =
        c + g + n * this.m_a1 * this.m_a1 + a * this.m_a2 * this.m_a2;
      this.m_K.solve33(m, -s, -r, -f);
    } else {
      c = this.m_invMassA;
      g = this.m_invMassB;
      n = this.m_invIA;
      a = this.m_invIB;
      f = n * this.m_s1 + a * this.m_s2;
      v = n + a;
      this.m_K.col1.set(
        c + g + n * this.m_s1 * this.m_s1 + a * this.m_s2 * this.m_s2,
        f,
        0
      );
      this.m_K.col2.set(f, v, 0);
      f = this.m_K.solve22(new w(), -s, -r);
      m.x = f.x;
      m.y = f.y;
      m.z = 0;
    }
    f = m.x * this.m_perp.x + m.z * this.m_axis.x;
    c = m.x * this.m_perp.y + m.z * this.m_axis.y;
    s = m.x * this.m_s1 + m.y + m.z * this.m_a1;
    m = m.x * this.m_s2 + m.y + m.z * this.m_a2;
    l.x -= this.m_invMassA * f;
    l.y -= this.m_invMassA * c;
    j -= this.m_invIA * s;
    o.x += this.m_invMassB * f;
    o.y += this.m_invMassB * c;
    q += this.m_invIB * m;
    d.m_sweep.a = j;
    h.m_sweep.a = q;
    d.SynchronizeTransform();
    h.SynchronizeTransform();
    return b <= F.LINEAR_SLOP && e <= F.ANGULAR_SLOP;
  };
  Box2D.inherit(O, Box2D.Dynamics.Joints.JointDef);
  O.prototype.__super = Box2D.Dynamics.Joints.JointDef.prototype;
  O.PrismaticJointDef = function () {
    Box2D.Dynamics.Joints.JointDef.JointDef.apply(this, arguments);
    this.localAnchorA = new w();
    this.localAnchorB = new w();
    this.localAxisA = new w();
  };
  O.prototype.PrismaticJointDef = function () {
    this.__super.JointDef.call(this);
    this.type = I.e_prismaticJoint;
    this.localAxisA.set(1, 0);
    this.referenceAngle = 0;
    this.enableLimit = false;
    this.upperTranslation = this.lowerTranslation = 0;
    this.enableMotor = false;
    this.motorSpeed = this.maxMotorForce = 0;
  };
  O.prototype.initialize = function (d, h, l, j) {
    this.bodyA = d;
    this.bodyB = h;
    this.localAnchorA = this.bodyA.getLocalPoint(l);
    this.localAnchorB = this.bodyB.getLocalPoint(l);
    this.localAxisA = this.bodyA.getLocalVector(j);
    this.referenceAngle = this.bodyB.getAngle() - this.bodyA.getAngle();
  };
  Box2D.inherit(E, Box2D.Dynamics.Joints.Joint);
  E.prototype.__super = Box2D.Dynamics.Joints.Joint.prototype;
  E.PulleyJoint = function () {
    Box2D.Dynamics.Joints.Joint.Joint.apply(this, arguments);
    this.m_groundAnchor1 = new w();
    this.m_groundAnchor2 = new w();
    this.m_localAnchor1 = new w();
    this.m_localAnchor2 = new w();
    this.m_u1 = new w();
    this.m_u2 = new w();
  };
  E.prototype.getAnchorA = function () {
    return this.m_bodyA.getWorldPoint(this.m_localAnchor1);
  };
  E.prototype.getAnchorB = function () {
    return this.m_bodyB.getWorldPoint(this.m_localAnchor2);
  };
  E.prototype.getReactionForce = function (d) {
    if (d === undefined) d = 0;
    return new w(
      d * this.m_impulse * this.m_u2.x,
      d * this.m_impulse * this.m_u2.y
    );
  };
  E.prototype.getReactionTorque = function () {
    return 0;
  };
  E.prototype.getGroundAnchorA = function () {
    var d = this.m_ground.m_xf.position.copy();
    d.add(this.m_groundAnchor1);
    return d;
  };
  E.prototype.getGroundAnchorB = function () {
    var d = this.m_ground.m_xf.position.copy();
    d.add(this.m_groundAnchor2);
    return d;
  };
  E.prototype.getlength1 = function () {
    var d = this.m_bodyA.getWorldPoint(this.m_localAnchor1),
      h = d.x - (this.m_ground.m_xf.position.x + this.m_groundAnchor1.x);
    d = d.y - (this.m_ground.m_xf.position.y + this.m_groundAnchor1.y);
    return Math.sqrt(h * h + d * d);
  };
  E.prototype.getlength2 = function () {
    var d = this.m_bodyB.getWorldPoint(this.m_localAnchor2),
      h = d.x - (this.m_ground.m_xf.position.x + this.m_groundAnchor2.x);
    d = d.y - (this.m_ground.m_xf.position.y + this.m_groundAnchor2.y);
    return Math.sqrt(h * h + d * d);
  };
  E.prototype.getRatio = function () {
    return this.m_ratio;
  };
  E.prototype.PulleyJoint = function (d) {
    this.__super.Joint.call(this, d);
    this.m_ground = this.m_bodyA.m_world.m_groundBody;
    this.m_groundAnchor1.x = d.groundAnchorA.x - this.m_ground.m_xf.position.x;
    this.m_groundAnchor1.y = d.groundAnchorA.y - this.m_ground.m_xf.position.y;
    this.m_groundAnchor2.x = d.groundAnchorB.x - this.m_ground.m_xf.position.x;
    this.m_groundAnchor2.y = d.groundAnchorB.y - this.m_ground.m_xf.position.y;
    this.m_localAnchor1.setV(d.localAnchorA);
    this.m_localAnchor2.setV(d.localAnchorB);
    this.m_ratio = d.ratio;
    this.m_constant = d.lengthA + this.m_ratio * d.lengthB;
    this.m_maxlength1 = y.min(
      d.maxlengthA,
      this.m_constant - this.m_ratio * E.b2_minPulleylength
    );
    this.m_maxlength2 = y.min(
      d.maxlengthB,
      (this.m_constant - E.b2_minPulleylength) / this.m_ratio
    );
    this.m_limitImpulse2 = this.m_limitImpulse1 = this.m_impulse = 0;
  };
  E.prototype.initVelocityConstraints = function (d) {
    var h = this.m_bodyA,
      l = this.m_bodyB,
      j;
    j = h.m_xf.R;
    var o = this.m_localAnchor1.x - h.m_sweep.localCenter.x,
      q = this.m_localAnchor1.y - h.m_sweep.localCenter.y,
      n = j.col1.x * o + j.col2.x * q;
    q = j.col1.y * o + j.col2.y * q;
    o = n;
    j = l.m_xf.R;
    var a = this.m_localAnchor2.x - l.m_sweep.localCenter.x,
      c = this.m_localAnchor2.y - l.m_sweep.localCenter.y;
    n = j.col1.x * a + j.col2.x * c;
    c = j.col1.y * a + j.col2.y * c;
    a = n;
    j = l.m_sweep.c.x + a;
    n = l.m_sweep.c.y + c;
    var g = this.m_ground.m_xf.position.x + this.m_groundAnchor2.x,
      b = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y;
    this.m_u1.set(
      h.m_sweep.c.x +
        o -
        (this.m_ground.m_xf.position.x + this.m_groundAnchor1.x),
      h.m_sweep.c.y +
        q -
        (this.m_ground.m_xf.position.y + this.m_groundAnchor1.y)
    );
    this.m_u2.set(j - g, n - b);
    j = this.m_u1.length();
    n = this.m_u2.length();
    j > F.LINEAR_SLOP ? this.m_u1.multiply(1 / j) : this.m_u1.setZero();
    n > F.LINEAR_SLOP ? this.m_u2.multiply(1 / n) : this.m_u2.setZero();
    if (this.m_constant - j - this.m_ratio * n > 0) {
      this.m_state = I.e_inactiveLimit;
      this.m_impulse = 0;
    } else this.m_state = I.e_atUpperLimit;
    if (j < this.m_maxlength1) {
      this.m_limitState1 = I.e_inactiveLimit;
      this.m_limitImpulse1 = 0;
    } else this.m_limitState1 = I.e_atUpperLimit;
    if (n < this.m_maxlength2) {
      this.m_limitState2 = I.e_inactiveLimit;
      this.m_limitImpulse2 = 0;
    } else this.m_limitState2 = I.e_atUpperLimit;
    j = o * this.m_u1.y - q * this.m_u1.x;
    n = a * this.m_u2.y - c * this.m_u2.x;
    this.m_limitMass1 = h.m_invMass + h.m_invI * j * j;
    this.m_limitMass2 = l.m_invMass + l.m_invI * n * n;
    this.m_pulleyMass =
      this.m_limitMass1 + this.m_ratio * this.m_ratio * this.m_limitMass2;
    this.m_limitMass1 = 1 / this.m_limitMass1;
    this.m_limitMass2 = 1 / this.m_limitMass2;
    this.m_pulleyMass = 1 / this.m_pulleyMass;
    if (d.warmStarting) {
      this.m_impulse *= d.dtRatio;
      this.m_limitImpulse1 *= d.dtRatio;
      this.m_limitImpulse2 *= d.dtRatio;
      d = (-this.m_impulse - this.m_limitImpulse1) * this.m_u1.x;
      j = (-this.m_impulse - this.m_limitImpulse1) * this.m_u1.y;
      n = (-this.m_ratio * this.m_impulse - this.m_limitImpulse2) * this.m_u2.x;
      g = (-this.m_ratio * this.m_impulse - this.m_limitImpulse2) * this.m_u2.y;
      h.m_linearVelocity.x += h.m_invMass * d;
      h.m_linearVelocity.y += h.m_invMass * j;
      h.m_angularVelocity += h.m_invI * (o * j - q * d);
      l.m_linearVelocity.x += l.m_invMass * n;
      l.m_linearVelocity.y += l.m_invMass * g;
      l.m_angularVelocity += l.m_invI * (a * g - c * n);
    } else this.m_limitImpulse2 = this.m_limitImpulse1 = this.m_impulse = 0;
  };
  E.prototype.solveVelocityConstraints = function () {
    var d = this.m_bodyA,
      h = this.m_bodyB,
      l;
    l = d.m_xf.R;
    var j = this.m_localAnchor1.x - d.m_sweep.localCenter.x,
      o = this.m_localAnchor1.y - d.m_sweep.localCenter.y,
      q = l.col1.x * j + l.col2.x * o;
    o = l.col1.y * j + l.col2.y * o;
    j = q;
    l = h.m_xf.R;
    var n = this.m_localAnchor2.x - h.m_sweep.localCenter.x,
      a = this.m_localAnchor2.y - h.m_sweep.localCenter.y;
    q = l.col1.x * n + l.col2.x * a;
    a = l.col1.y * n + l.col2.y * a;
    n = q;
    var c = (q = l = 0),
      g = 0;
    l = g = l = g = c = q = l = 0;
    if (this.m_state == I.e_atUpperLimit) {
      l = d.m_linearVelocity.x + -d.m_angularVelocity * o;
      q = d.m_linearVelocity.y + d.m_angularVelocity * j;
      c = h.m_linearVelocity.x + -h.m_angularVelocity * a;
      g = h.m_linearVelocity.y + h.m_angularVelocity * n;
      l =
        -(this.m_u1.x * l + this.m_u1.y * q) -
        this.m_ratio * (this.m_u2.x * c + this.m_u2.y * g);
      g = this.m_pulleyMass * -l;
      l = this.m_impulse;
      this.m_impulse = y.max(0, this.m_impulse + g);
      g = this.m_impulse - l;
      l = -g * this.m_u1.x;
      q = -g * this.m_u1.y;
      c = -this.m_ratio * g * this.m_u2.x;
      g = -this.m_ratio * g * this.m_u2.y;
      d.m_linearVelocity.x += d.m_invMass * l;
      d.m_linearVelocity.y += d.m_invMass * q;
      d.m_angularVelocity += d.m_invI * (j * q - o * l);
      h.m_linearVelocity.x += h.m_invMass * c;
      h.m_linearVelocity.y += h.m_invMass * g;
      h.m_angularVelocity += h.m_invI * (n * g - a * c);
    }
    if (this.m_limitState1 == I.e_atUpperLimit) {
      l = d.m_linearVelocity.x + -d.m_angularVelocity * o;
      q = d.m_linearVelocity.y + d.m_angularVelocity * j;
      l = -(this.m_u1.x * l + this.m_u1.y * q);
      g = -this.m_limitMass1 * l;
      l = this.m_limitImpulse1;
      this.m_limitImpulse1 = y.max(0, this.m_limitImpulse1 + g);
      g = this.m_limitImpulse1 - l;
      l = -g * this.m_u1.x;
      q = -g * this.m_u1.y;
      d.m_linearVelocity.x += d.m_invMass * l;
      d.m_linearVelocity.y += d.m_invMass * q;
      d.m_angularVelocity += d.m_invI * (j * q - o * l);
    }
    if (this.m_limitState2 == I.e_atUpperLimit) {
      c = h.m_linearVelocity.x + -h.m_angularVelocity * a;
      g = h.m_linearVelocity.y + h.m_angularVelocity * n;
      l = -(this.m_u2.x * c + this.m_u2.y * g);
      g = -this.m_limitMass2 * l;
      l = this.m_limitImpulse2;
      this.m_limitImpulse2 = y.max(0, this.m_limitImpulse2 + g);
      g = this.m_limitImpulse2 - l;
      c = -g * this.m_u2.x;
      g = -g * this.m_u2.y;
      h.m_linearVelocity.x += h.m_invMass * c;
      h.m_linearVelocity.y += h.m_invMass * g;
      h.m_angularVelocity += h.m_invI * (n * g - a * c);
    }
  };
  E.prototype.solvePositionConstraints = function () {
    var d = this.m_bodyA,
      h = this.m_bodyB,
      l,
      j = this.m_ground.m_xf.position.x + this.m_groundAnchor1.x,
      o = this.m_ground.m_xf.position.y + this.m_groundAnchor1.y,
      q = this.m_ground.m_xf.position.x + this.m_groundAnchor2.x,
      n = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y,
      a = 0,
      c = 0,
      g = 0,
      b = 0,
      e = (l = 0),
      f = 0,
      m = 0,
      r = (e = m = l = e = l = 0);
    if (this.m_state == I.e_atUpperLimit) {
      l = d.m_xf.R;
      a = this.m_localAnchor1.x - d.m_sweep.localCenter.x;
      c = this.m_localAnchor1.y - d.m_sweep.localCenter.y;
      e = l.col1.x * a + l.col2.x * c;
      c = l.col1.y * a + l.col2.y * c;
      a = e;
      l = h.m_xf.R;
      g = this.m_localAnchor2.x - h.m_sweep.localCenter.x;
      b = this.m_localAnchor2.y - h.m_sweep.localCenter.y;
      e = l.col1.x * g + l.col2.x * b;
      b = l.col1.y * g + l.col2.y * b;
      g = e;
      l = d.m_sweep.c.x + a;
      e = d.m_sweep.c.y + c;
      f = h.m_sweep.c.x + g;
      m = h.m_sweep.c.y + b;
      this.m_u1.set(l - j, e - o);
      this.m_u2.set(f - q, m - n);
      l = this.m_u1.length();
      e = this.m_u2.length();
      l > F.LINEAR_SLOP ? this.m_u1.multiply(1 / l) : this.m_u1.setZero();
      e > F.LINEAR_SLOP ? this.m_u2.multiply(1 / e) : this.m_u2.setZero();
      l = this.m_constant - l - this.m_ratio * e;
      r = y.max(r, -l);
      l = y.clamp(l + F.LINEAR_SLOP, -F.MAX_LINEAR_CORRECTION, 0);
      m = -this.m_pulleyMass * l;
      l = -m * this.m_u1.x;
      e = -m * this.m_u1.y;
      f = -this.m_ratio * m * this.m_u2.x;
      m = -this.m_ratio * m * this.m_u2.y;
      d.m_sweep.c.x += d.m_invMass * l;
      d.m_sweep.c.y += d.m_invMass * e;
      d.m_sweep.a += d.m_invI * (a * e - c * l);
      h.m_sweep.c.x += h.m_invMass * f;
      h.m_sweep.c.y += h.m_invMass * m;
      h.m_sweep.a += h.m_invI * (g * m - b * f);
      d.SynchronizeTransform();
      h.SynchronizeTransform();
    }
    if (this.m_limitState1 == I.e_atUpperLimit) {
      l = d.m_xf.R;
      a = this.m_localAnchor1.x - d.m_sweep.localCenter.x;
      c = this.m_localAnchor1.y - d.m_sweep.localCenter.y;
      e = l.col1.x * a + l.col2.x * c;
      c = l.col1.y * a + l.col2.y * c;
      a = e;
      l = d.m_sweep.c.x + a;
      e = d.m_sweep.c.y + c;
      this.m_u1.set(l - j, e - o);
      l = this.m_u1.length();
      if (l > F.LINEAR_SLOP) {
        this.m_u1.x *= 1 / l;
        this.m_u1.y *= 1 / l;
      } else this.m_u1.setZero();
      l = this.m_maxlength1 - l;
      r = y.max(r, -l);
      l = y.clamp(l + F.LINEAR_SLOP, -F.MAX_LINEAR_CORRECTION, 0);
      m = -this.m_limitMass1 * l;
      l = -m * this.m_u1.x;
      e = -m * this.m_u1.y;
      d.m_sweep.c.x += d.m_invMass * l;
      d.m_sweep.c.y += d.m_invMass * e;
      d.m_sweep.a += d.m_invI * (a * e - c * l);
      d.SynchronizeTransform();
    }
    if (this.m_limitState2 == I.e_atUpperLimit) {
      l = h.m_xf.R;
      g = this.m_localAnchor2.x - h.m_sweep.localCenter.x;
      b = this.m_localAnchor2.y - h.m_sweep.localCenter.y;
      e = l.col1.x * g + l.col2.x * b;
      b = l.col1.y * g + l.col2.y * b;
      g = e;
      f = h.m_sweep.c.x + g;
      m = h.m_sweep.c.y + b;
      this.m_u2.set(f - q, m - n);
      e = this.m_u2.length();
      if (e > F.LINEAR_SLOP) {
        this.m_u2.x *= 1 / e;
        this.m_u2.y *= 1 / e;
      } else this.m_u2.setZero();
      l = this.m_maxlength2 - e;
      r = y.max(r, -l);
      l = y.clamp(l + F.LINEAR_SLOP, -F.MAX_LINEAR_CORRECTION, 0);
      m = -this.m_limitMass2 * l;
      f = -m * this.m_u2.x;
      m = -m * this.m_u2.y;
      h.m_sweep.c.x += h.m_invMass * f;
      h.m_sweep.c.y += h.m_invMass * m;
      h.m_sweep.a += h.m_invI * (g * m - b * f);
      h.SynchronizeTransform();
    }
    return r < F.LINEAR_SLOP;
  };
  Box2D.postDefs.push(function () {
    Box2D.Dynamics.Joints.PulleyJoint.b2_minPulleylength = 2;
  });
  Box2D.inherit(R, Box2D.Dynamics.Joints.JointDef);
  R.prototype.__super = Box2D.Dynamics.Joints.JointDef.prototype;
  R.PulleyJointDef = function () {
    Box2D.Dynamics.Joints.JointDef.JointDef.apply(this, arguments);
    this.groundAnchorA = new w();
    this.groundAnchorB = new w();
    this.localAnchorA = new w();
    this.localAnchorB = new w();
  };
  R.prototype.PulleyJointDef = function () {
    this.__super.JointDef.call(this);
    this.type = I.e_pulleyJoint;
    this.groundAnchorA.set(-1, 1);
    this.groundAnchorB.set(1, 1);
    this.localAnchorA.set(-1, 0);
    this.localAnchorB.set(1, 0);
    this.maxlengthB = this.lengthB = this.maxlengthA = this.lengthA = 0;
    this.ratio = 1;
    this.collideConnected = true;
  };
  R.prototype.initialize = function (d, h, l, j, o, q, n) {
    if (n === undefined) n = 0;
    this.bodyA = d;
    this.bodyB = h;
    this.groundAnchorA.setV(l);
    this.groundAnchorB.setV(j);
    this.localAnchorA = this.bodyA.getLocalPoint(o);
    this.localAnchorB = this.bodyB.getLocalPoint(q);
    d = o.x - l.x;
    l = o.y - l.y;
    this.lengthA = Math.sqrt(d * d + l * l);
    l = q.x - j.x;
    j = q.y - j.y;
    this.lengthB = Math.sqrt(l * l + j * j);
    this.ratio = n;
    n = this.lengthA + this.ratio * this.lengthB;
    this.maxlengthA = n - this.ratio * E.b2_minPulleylength;
    this.maxlengthB = (n - E.b2_minPulleylength) / this.ratio;
  };
  Box2D.inherit(N, Box2D.Dynamics.Joints.Joint);
  N.prototype.__super = Box2D.Dynamics.Joints.Joint.prototype;
  N.RevoluteJoint = function () {
    Box2D.Dynamics.Joints.Joint.Joint.apply(this, arguments);
    this.K = new G();
    this.K1 = new G();
    this.K2 = new G();
    this.K3 = new G();
    this.impulse3 = new A();
    this.impulse2 = new w();
    this.reduced = new w();
    this.m_localAnchor1 = new w();
    this.m_localAnchor2 = new w();
    this.m_impulse = new A();
    this.m_mass = new K();
  };
  N.prototype.getAnchorA = function () {
    return this.m_bodyA.getWorldPoint(this.m_localAnchor1);
  };
  N.prototype.getAnchorB = function () {
    return this.m_bodyB.getWorldPoint(this.m_localAnchor2);
  };
  N.prototype.getReactionForce = function (d) {
    if (d === undefined) d = 0;
    return new w(d * this.m_impulse.x, d * this.m_impulse.y);
  };
  N.prototype.getReactionTorque = function (d) {
    if (d === undefined) d = 0;
    return d * this.m_impulse.z;
  };
  N.prototype.getJointAngle = function () {
    return (
      this.m_bodyB.m_sweep.a - this.m_bodyA.m_sweep.a - this.m_referenceAngle
    );
  };
  N.prototype.getJointSpeed = function () {
    return this.m_bodyB.m_angularVelocity - this.m_bodyA.m_angularVelocity;
  };
  N.prototype.isLimitEnabled = function () {
    return this.m_enableLimit;
  };
  N.prototype.enableLimit = function (d) {
    this.m_enableLimit = d;
  };
  N.prototype.getLowerLimit = function () {
    return this.m_lowerAngle;
  };
  N.prototype.getUpperLimit = function () {
    return this.m_upperAngle;
  };
  N.prototype.setLimits = function (d, h) {
    if (d === undefined) d = 0;
    if (h === undefined) h = 0;
    this.m_lowerAngle = d;
    this.m_upperAngle = h;
  };
  N.prototype.isMotorEnabled = function () {
    this.m_bodyA.setAwake(true);
    this.m_bodyB.setAwake(true);
    return this.m_enableMotor;
  };
  N.prototype.enableMotor = function (d) {
    this.m_enableMotor = d;
  };
  N.prototype.setMotorSpeed = function (d) {
    if (d === undefined) d = 0;
    this.m_bodyA.setAwake(true);
    this.m_bodyB.setAwake(true);
    this.m_motorSpeed = d;
  };
  N.prototype.getMotorSpeed = function () {
    return this.m_motorSpeed;
  };
  N.prototype.setmaxMotorTorque = function (d) {
    if (d === undefined) d = 0;
    this.m_maxMotorTorque = d;
  };
  N.prototype.getMotorTorque = function () {
    return this.m_maxMotorTorque;
  };
  N.prototype.RevoluteJoint = function (d) {
    this.__super.Joint.call(this, d);
    this.m_localAnchor1.setV(d.localAnchorA);
    this.m_localAnchor2.setV(d.localAnchorB);
    this.m_referenceAngle = d.referenceAngle;
    this.m_impulse.setZero();
    this.m_motorImpulse = 0;
    this.m_lowerAngle = d.lowerAngle;
    this.m_upperAngle = d.upperAngle;
    this.m_maxMotorTorque = d.maxMotorTorque;
    this.m_motorSpeed = d.motorSpeed;
    this.m_enableLimit = d.enableLimit;
    this.m_enableMotor = d.enableMotor;
    this.m_limitState = I.e_inactiveLimit;
  };
  N.prototype.initVelocityConstraints = function (d) {
    var h = this.m_bodyA,
      l = this.m_bodyB,
      j,
      o = 0;
    j = h.m_xf.R;
    var q = this.m_localAnchor1.x - h.m_sweep.localCenter.x,
      n = this.m_localAnchor1.y - h.m_sweep.localCenter.y;
    o = j.col1.x * q + j.col2.x * n;
    n = j.col1.y * q + j.col2.y * n;
    q = o;
    j = l.m_xf.R;
    var a = this.m_localAnchor2.x - l.m_sweep.localCenter.x,
      c = this.m_localAnchor2.y - l.m_sweep.localCenter.y;
    o = j.col1.x * a + j.col2.x * c;
    c = j.col1.y * a + j.col2.y * c;
    a = o;
    j = h.m_invMass;
    o = l.m_invMass;
    var g = h.m_invI,
      b = l.m_invI;
    this.m_mass.col1.x = j + o + n * n * g + c * c * b;
    this.m_mass.col2.x = -n * q * g - c * a * b;
    this.m_mass.col3.x = -n * g - c * b;
    this.m_mass.col1.y = this.m_mass.col2.x;
    this.m_mass.col2.y = j + o + q * q * g + a * a * b;
    this.m_mass.col3.y = q * g + a * b;
    this.m_mass.col1.z = this.m_mass.col3.x;
    this.m_mass.col2.z = this.m_mass.col3.y;
    this.m_mass.col3.z = g + b;
    this.m_motorMass = 1 / (g + b);
    if (this.m_enableMotor == false) this.m_motorImpulse = 0;
    if (this.m_enableLimit) {
      var e = l.m_sweep.a - h.m_sweep.a - this.m_referenceAngle;
      if (y.abs(this.m_upperAngle - this.m_lowerAngle) < 2 * F.ANGULAR_SLOP)
        this.m_limitState = I.e_equalLimits;
      else if (e <= this.m_lowerAngle) {
        if (this.m_limitState != I.e_atLowerLimit) this.m_impulse.z = 0;
        this.m_limitState = I.e_atLowerLimit;
      } else if (e >= this.m_upperAngle) {
        if (this.m_limitState != I.e_atUpperLimit) this.m_impulse.z = 0;
        this.m_limitState = I.e_atUpperLimit;
      } else {
        this.m_limitState = I.e_inactiveLimit;
        this.m_impulse.z = 0;
      }
    } else this.m_limitState = I.e_inactiveLimit;
    if (d.warmStarting) {
      this.m_impulse.x *= d.dtRatio;
      this.m_impulse.y *= d.dtRatio;
      this.m_motorImpulse *= d.dtRatio;
      d = this.m_impulse.x;
      e = this.m_impulse.y;
      h.m_linearVelocity.x -= j * d;
      h.m_linearVelocity.y -= j * e;
      h.m_angularVelocity -=
        g * (q * e - n * d + this.m_motorImpulse + this.m_impulse.z);
      l.m_linearVelocity.x += o * d;
      l.m_linearVelocity.y += o * e;
      l.m_angularVelocity +=
        b * (a * e - c * d + this.m_motorImpulse + this.m_impulse.z);
    } else {
      this.m_impulse.setZero();
      this.m_motorImpulse = 0;
    }
  };
  N.prototype.solveVelocityConstraints = function (d) {
    var h = this.m_bodyA,
      l = this.m_bodyB,
      j = 0,
      o = (j = 0),
      q = 0,
      n = 0,
      a = 0,
      c = h.m_linearVelocity,
      g = h.m_angularVelocity,
      b = l.m_linearVelocity,
      e = l.m_angularVelocity,
      f = h.m_invMass,
      m = l.m_invMass,
      r = h.m_invI,
      s = l.m_invI;
    if (this.m_enableMotor && this.m_limitState != I.e_equalLimits) {
      o = this.m_motorMass * -(e - g - this.m_motorSpeed);
      q = this.m_motorImpulse;
      n = d.dt * this.m_maxMotorTorque;
      this.m_motorImpulse = y.clamp(this.m_motorImpulse + o, -n, n);
      o = this.m_motorImpulse - q;
      g -= r * o;
      e += s * o;
    }
    if (this.m_enableLimit && this.m_limitState != I.e_inactiveLimit) {
      d = h.m_xf.R;
      o = this.m_localAnchor1.x - h.m_sweep.localCenter.x;
      q = this.m_localAnchor1.y - h.m_sweep.localCenter.y;
      j = d.col1.x * o + d.col2.x * q;
      q = d.col1.y * o + d.col2.y * q;
      o = j;
      d = l.m_xf.R;
      n = this.m_localAnchor2.x - l.m_sweep.localCenter.x;
      a = this.m_localAnchor2.y - l.m_sweep.localCenter.y;
      j = d.col1.x * n + d.col2.x * a;
      a = d.col1.y * n + d.col2.y * a;
      n = j;
      d = b.x + -e * a - c.x - -g * q;
      var v = b.y + e * n - c.y - g * o;
      this.m_mass.solve33(this.impulse3, -d, -v, -(e - g));
      if (this.m_limitState == I.e_equalLimits)
        this.m_impulse.add(this.impulse3);
      else if (this.m_limitState == I.e_atLowerLimit) {
        j = this.m_impulse.z + this.impulse3.z;
        if (j < 0) {
          this.m_mass.solve22(this.reduced, -d, -v);
          this.impulse3.x = this.reduced.x;
          this.impulse3.y = this.reduced.y;
          this.impulse3.z = -this.m_impulse.z;
          this.m_impulse.x += this.reduced.x;
          this.m_impulse.y += this.reduced.y;
          this.m_impulse.z = 0;
        }
      } else if (this.m_limitState == I.e_atUpperLimit) {
        j = this.m_impulse.z + this.impulse3.z;
        if (j > 0) {
          this.m_mass.solve22(this.reduced, -d, -v);
          this.impulse3.x = this.reduced.x;
          this.impulse3.y = this.reduced.y;
          this.impulse3.z = -this.m_impulse.z;
          this.m_impulse.x += this.reduced.x;
          this.m_impulse.y += this.reduced.y;
          this.m_impulse.z = 0;
        }
      }
      c.x -= f * this.impulse3.x;
      c.y -= f * this.impulse3.y;
      g -= r * (o * this.impulse3.y - q * this.impulse3.x + this.impulse3.z);
      b.x += m * this.impulse3.x;
      b.y += m * this.impulse3.y;
      e += s * (n * this.impulse3.y - a * this.impulse3.x + this.impulse3.z);
    } else {
      d = h.m_xf.R;
      o = this.m_localAnchor1.x - h.m_sweep.localCenter.x;
      q = this.m_localAnchor1.y - h.m_sweep.localCenter.y;
      j = d.col1.x * o + d.col2.x * q;
      q = d.col1.y * o + d.col2.y * q;
      o = j;
      d = l.m_xf.R;
      n = this.m_localAnchor2.x - l.m_sweep.localCenter.x;
      a = this.m_localAnchor2.y - l.m_sweep.localCenter.y;
      j = d.col1.x * n + d.col2.x * a;
      a = d.col1.y * n + d.col2.y * a;
      n = j;
      this.m_mass.solve22(
        this.impulse2,
        -(b.x + -e * a - c.x - -g * q),
        -(b.y + e * n - c.y - g * o)
      );
      this.m_impulse.x += this.impulse2.x;
      this.m_impulse.y += this.impulse2.y;
      c.x -= f * this.impulse2.x;
      c.y -= f * this.impulse2.y;
      g -= r * (o * this.impulse2.y - q * this.impulse2.x);
      b.x += m * this.impulse2.x;
      b.y += m * this.impulse2.y;
      e += s * (n * this.impulse2.y - a * this.impulse2.x);
    }
    h.m_linearVelocity.setV(c);
    h.m_angularVelocity = g;
    l.m_linearVelocity.setV(b);
    l.m_angularVelocity = e;
  };
  N.prototype.solvePositionConstraints = function () {
    var d = 0,
      h,
      l = this.m_bodyA,
      j = this.m_bodyB,
      o = 0,
      q = (h = 0),
      n = 0,
      a = 0;
    if (this.m_enableLimit && this.m_limitState != I.e_inactiveLimit) {
      d = j.m_sweep.a - l.m_sweep.a - this.m_referenceAngle;
      var c = 0;
      if (this.m_limitState == I.e_equalLimits) {
        d = y.clamp(
          d - this.m_lowerAngle,
          -F.MAX_ANGULAR_CORRECTION,
          F.MAX_ANGULAR_CORRECTION
        );
        c = -this.m_motorMass * d;
        o = y.abs(d);
      } else if (this.m_limitState == I.e_atLowerLimit) {
        d = d - this.m_lowerAngle;
        o = -d;
        d = y.clamp(d + F.ANGULAR_SLOP, -F.MAX_ANGULAR_CORRECTION, 0);
        c = -this.m_motorMass * d;
      } else if (this.m_limitState == I.e_atUpperLimit) {
        o = d = d - this.m_upperAngle;
        d = y.clamp(d - F.ANGULAR_SLOP, 0, F.MAX_ANGULAR_CORRECTION);
        c = -this.m_motorMass * d;
      }
      l.m_sweep.a -= l.m_invI * c;
      j.m_sweep.a += j.m_invI * c;
      l.SynchronizeTransform();
      j.SynchronizeTransform();
    }
    h = l.m_xf.R;
    c = this.m_localAnchor1.x - l.m_sweep.localCenter.x;
    d = this.m_localAnchor1.y - l.m_sweep.localCenter.y;
    q = h.col1.x * c + h.col2.x * d;
    d = h.col1.y * c + h.col2.y * d;
    c = q;
    h = j.m_xf.R;
    var g = this.m_localAnchor2.x - j.m_sweep.localCenter.x,
      b = this.m_localAnchor2.y - j.m_sweep.localCenter.y;
    q = h.col1.x * g + h.col2.x * b;
    b = h.col1.y * g + h.col2.y * b;
    g = q;
    n = j.m_sweep.c.x + g - l.m_sweep.c.x - c;
    a = j.m_sweep.c.y + b - l.m_sweep.c.y - d;
    var e = n * n + a * a;
    h = Math.sqrt(e);
    q = l.m_invMass;
    var f = j.m_invMass,
      m = l.m_invI,
      r = j.m_invI,
      s = 10 * F.LINEAR_SLOP;
    if (e > s * s) {
      e = 1 / (q + f);
      n = e * -n;
      a = e * -a;
      l.m_sweep.c.x -= 0.5 * q * n;
      l.m_sweep.c.y -= 0.5 * q * a;
      j.m_sweep.c.x += 0.5 * f * n;
      j.m_sweep.c.y += 0.5 * f * a;
      n = j.m_sweep.c.x + g - l.m_sweep.c.x - c;
      a = j.m_sweep.c.y + b - l.m_sweep.c.y - d;
    }
    this.K1.col1.x = q + f;
    this.K1.col2.x = 0;
    this.K1.col1.y = 0;
    this.K1.col2.y = q + f;
    this.K2.col1.x = m * d * d;
    this.K2.col2.x = -m * c * d;
    this.K2.col1.y = -m * c * d;
    this.K2.col2.y = m * c * c;
    this.K3.col1.x = r * b * b;
    this.K3.col2.x = -r * g * b;
    this.K3.col1.y = -r * g * b;
    this.K3.col2.y = r * g * g;
    this.K.setM(this.K1);
    this.K.addM(this.K2);
    this.K.addM(this.K3);
    this.K.solve(N.tImpulse, -n, -a);
    n = N.tImpulse.x;
    a = N.tImpulse.y;
    l.m_sweep.c.x -= l.m_invMass * n;
    l.m_sweep.c.y -= l.m_invMass * a;
    l.m_sweep.a -= l.m_invI * (c * a - d * n);
    j.m_sweep.c.x += j.m_invMass * n;
    j.m_sweep.c.y += j.m_invMass * a;
    j.m_sweep.a += j.m_invI * (g * a - b * n);
    l.SynchronizeTransform();
    j.SynchronizeTransform();
    return h <= F.LINEAR_SLOP && o <= F.ANGULAR_SLOP;
  };
  Box2D.postDefs.push(function () {
    Box2D.Dynamics.Joints.RevoluteJoint.tImpulse = new w();
  });
  Box2D.inherit(S, Box2D.Dynamics.Joints.JointDef);
  S.prototype.__super = Box2D.Dynamics.Joints.JointDef.prototype;
  S.RevoluteJointDef = function () {
    Box2D.Dynamics.Joints.JointDef.JointDef.apply(this, arguments);
    this.localAnchorA = new w();
    this.localAnchorB = new w();
  };
  S.prototype.RevoluteJointDef = function () {
    this.__super.JointDef.call(this);
    this.type = I.e_revoluteJoint;
    this.localAnchorA.set(0, 0);
    this.localAnchorB.set(0, 0);
    this.motorSpeed = this.maxMotorTorque = this.upperAngle = this.lowerAngle = this.referenceAngle = 0;
    this.enableMotor = this.enableLimit = false;
  };
  S.prototype.initialize = function (d, h, l) {
    this.bodyA = d;
    this.bodyB = h;
    this.localAnchorA = this.bodyA.getLocalPoint(l);
    this.localAnchorB = this.bodyB.getLocalPoint(l);
    this.referenceAngle = this.bodyB.getAngle() - this.bodyA.getAngle();
  };
  Box2D.inherit(aa, Box2D.Dynamics.Joints.Joint);
  aa.prototype.__super = Box2D.Dynamics.Joints.Joint.prototype;
  aa.WeldJoint = function () {
    Box2D.Dynamics.Joints.Joint.Joint.apply(this, arguments);
    this.m_localAnchorA = new w();
    this.m_localAnchorB = new w();
    this.m_impulse = new A();
    this.m_mass = new K();
  };
  aa.prototype.getAnchorA = function () {
    return this.m_bodyA.getWorldPoint(this.m_localAnchorA);
  };
  aa.prototype.getAnchorB = function () {
    return this.m_bodyB.getWorldPoint(this.m_localAnchorB);
  };
  aa.prototype.getReactionForce = function (d) {
    if (d === undefined) d = 0;
    return new w(d * this.m_impulse.x, d * this.m_impulse.y);
  };
  aa.prototype.getReactionTorque = function (d) {
    if (d === undefined) d = 0;
    return d * this.m_impulse.z;
  };
  aa.prototype.WeldJoint = function (d) {
    this.__super.Joint.call(this, d);
    this.m_localAnchorA.setV(d.localAnchorA);
    this.m_localAnchorB.setV(d.localAnchorB);
    this.m_referenceAngle = d.referenceAngle;
    this.m_impulse.setZero();
    this.m_mass = new K();
  };
  aa.prototype.initVelocityConstraints = function (d) {
    var h,
      l = 0,
      j = this.m_bodyA,
      o = this.m_bodyB;
    h = j.m_xf.R;
    var q = this.m_localAnchorA.x - j.m_sweep.localCenter.x,
      n = this.m_localAnchorA.y - j.m_sweep.localCenter.y;
    l = h.col1.x * q + h.col2.x * n;
    n = h.col1.y * q + h.col2.y * n;
    q = l;
    h = o.m_xf.R;
    var a = this.m_localAnchorB.x - o.m_sweep.localCenter.x,
      c = this.m_localAnchorB.y - o.m_sweep.localCenter.y;
    l = h.col1.x * a + h.col2.x * c;
    c = h.col1.y * a + h.col2.y * c;
    a = l;
    h = j.m_invMass;
    l = o.m_invMass;
    var g = j.m_invI,
      b = o.m_invI;
    this.m_mass.col1.x = h + l + n * n * g + c * c * b;
    this.m_mass.col2.x = -n * q * g - c * a * b;
    this.m_mass.col3.x = -n * g - c * b;
    this.m_mass.col1.y = this.m_mass.col2.x;
    this.m_mass.col2.y = h + l + q * q * g + a * a * b;
    this.m_mass.col3.y = q * g + a * b;
    this.m_mass.col1.z = this.m_mass.col3.x;
    this.m_mass.col2.z = this.m_mass.col3.y;
    this.m_mass.col3.z = g + b;
    if (d.warmStarting) {
      this.m_impulse.x *= d.dtRatio;
      this.m_impulse.y *= d.dtRatio;
      this.m_impulse.z *= d.dtRatio;
      j.m_linearVelocity.x -= h * this.m_impulse.x;
      j.m_linearVelocity.y -= h * this.m_impulse.y;
      j.m_angularVelocity -=
        g * (q * this.m_impulse.y - n * this.m_impulse.x + this.m_impulse.z);
      o.m_linearVelocity.x += l * this.m_impulse.x;
      o.m_linearVelocity.y += l * this.m_impulse.y;
      o.m_angularVelocity +=
        b * (a * this.m_impulse.y - c * this.m_impulse.x + this.m_impulse.z);
    } else this.m_impulse.setZero();
  };
  aa.prototype.solveVelocityConstraints = function () {
    var d,
      h = 0,
      l = this.m_bodyA,
      j = this.m_bodyB,
      o = l.m_linearVelocity,
      q = l.m_angularVelocity,
      n = j.m_linearVelocity,
      a = j.m_angularVelocity,
      c = l.m_invMass,
      g = j.m_invMass,
      b = l.m_invI,
      e = j.m_invI;
    d = l.m_xf.R;
    var f = this.m_localAnchorA.x - l.m_sweep.localCenter.x,
      m = this.m_localAnchorA.y - l.m_sweep.localCenter.y;
    h = d.col1.x * f + d.col2.x * m;
    m = d.col1.y * f + d.col2.y * m;
    f = h;
    d = j.m_xf.R;
    var r = this.m_localAnchorB.x - j.m_sweep.localCenter.x,
      s = this.m_localAnchorB.y - j.m_sweep.localCenter.y;
    h = d.col1.x * r + d.col2.x * s;
    s = d.col1.y * r + d.col2.y * s;
    r = h;
    d = n.x - a * s - o.x + q * m;
    h = n.y + a * r - o.y - q * f;
    var v = a - q,
      t = new A();
    this.m_mass.solve33(t, -d, -h, -v);
    this.m_impulse.add(t);
    o.x -= c * t.x;
    o.y -= c * t.y;
    q -= b * (f * t.y - m * t.x + t.z);
    n.x += g * t.x;
    n.y += g * t.y;
    a += e * (r * t.y - s * t.x + t.z);
    l.m_angularVelocity = q;
    j.m_angularVelocity = a;
  };
  aa.prototype.solvePositionConstraints = function () {
    var d,
      h = 0,
      l = this.m_bodyA,
      j = this.m_bodyB;
    d = l.m_xf.R;
    var o = this.m_localAnchorA.x - l.m_sweep.localCenter.x,
      q = this.m_localAnchorA.y - l.m_sweep.localCenter.y;
    h = d.col1.x * o + d.col2.x * q;
    q = d.col1.y * o + d.col2.y * q;
    o = h;
    d = j.m_xf.R;
    var n = this.m_localAnchorB.x - j.m_sweep.localCenter.x,
      a = this.m_localAnchorB.y - j.m_sweep.localCenter.y;
    h = d.col1.x * n + d.col2.x * a;
    a = d.col1.y * n + d.col2.y * a;
    n = h;
    d = l.m_invMass;
    h = j.m_invMass;
    var c = l.m_invI,
      g = j.m_invI,
      b = j.m_sweep.c.x + n - l.m_sweep.c.x - o,
      e = j.m_sweep.c.y + a - l.m_sweep.c.y - q,
      f = j.m_sweep.a - l.m_sweep.a - this.m_referenceAngle,
      m = 10 * F.LINEAR_SLOP,
      r = Math.sqrt(b * b + e * e),
      s = y.abs(f);
    if (r > m) {
      c *= 1;
      g *= 1;
    }
    this.m_mass.col1.x = d + h + q * q * c + a * a * g;
    this.m_mass.col2.x = -q * o * c - a * n * g;
    this.m_mass.col3.x = -q * c - a * g;
    this.m_mass.col1.y = this.m_mass.col2.x;
    this.m_mass.col2.y = d + h + o * o * c + n * n * g;
    this.m_mass.col3.y = o * c + n * g;
    this.m_mass.col1.z = this.m_mass.col3.x;
    this.m_mass.col2.z = this.m_mass.col3.y;
    this.m_mass.col3.z = c + g;
    m = new A();
    this.m_mass.solve33(m, -b, -e, -f);
    l.m_sweep.c.x -= d * m.x;
    l.m_sweep.c.y -= d * m.y;
    l.m_sweep.a -= c * (o * m.y - q * m.x + m.z);
    j.m_sweep.c.x += h * m.x;
    j.m_sweep.c.y += h * m.y;
    j.m_sweep.a += g * (n * m.y - a * m.x + m.z);
    l.SynchronizeTransform();
    j.SynchronizeTransform();
    return r <= F.LINEAR_SLOP && s <= F.ANGULAR_SLOP;
  };
  Box2D.inherit(Z, Box2D.Dynamics.Joints.JointDef);
  Z.prototype.__super = Box2D.Dynamics.Joints.JointDef.prototype;
  Z.WeldJointDef = function () {
    Box2D.Dynamics.Joints.JointDef.JointDef.apply(this, arguments);
    this.localAnchorA = new w();
    this.localAnchorB = new w();
  };
  Z.prototype.WeldJointDef = function () {
    this.__super.JointDef.call(this);
    this.type = I.e_weldJoint;
    this.referenceAngle = 0;
  };
  Z.prototype.initialize = function (d, h, l) {
    this.bodyA = d;
    this.bodyB = h;
    this.localAnchorA.setV(this.bodyA.getLocalPoint(l));
    this.localAnchorB.setV(this.bodyB.getLocalPoint(l));
    this.referenceAngle = this.bodyB.getAngle() - this.bodyA.getAngle();
  };
})();
(function () {
  var F = Box2D.Dynamics.DebugDraw;
  F.DebugDraw = function () {
    this.m_xformScale = this.m_fillAlpha = this.m_alpha = this.m_lineThickness = this.m_drawScale = 1;
    var G = this;
    this.m_sprite = {
      graphics: {
        clear: function () {
          G.m_ctx.clearRect(0, 0, G.m_ctx.canvas.width, G.m_ctx.canvas.height);
        },
      },
    };
  };
  F.prototype._color = function (G, K) {
    return (
      "rgba(" +
      ((G & 16711680) >> 16) +
      "," +
      ((G & 65280) >> 8) +
      "," +
      (G & 255) +
      "," +
      K +
      ")"
    );
  };
  F.prototype.DebugDraw = function () {
    this.m_drawFlags = 0;
  };
  F.prototype.setFlags = function (G) {
    if (G === undefined) G = 0;
    this.m_drawFlags = G;
  };
  F.prototype.getFlags = function () {
    return this.m_drawFlags;
  };
  F.prototype.appendFlags = function (G) {
    if (G === undefined) G = 0;
    this.m_drawFlags |= G;
  };
  F.prototype.clearFlags = function (G) {
    if (G === undefined) G = 0;
    this.m_drawFlags &= ~G;
  };
  F.prototype.setSprite = function (G) {
    this.m_ctx = G;
  };
  F.prototype.getSprite = function () {
    return this.m_ctx;
  };
  F.prototype.setdrawScale = function (G) {
    if (G === undefined) G = 0;
    this.m_drawScale = G;
  };
  F.prototype.getdrawScale = function () {
    return this.m_drawScale;
  };
  F.prototype.setLineThickness = function (G) {
    if (G === undefined) G = 0;
    this.m_lineThickness = G;
    this.m_ctx.strokeWidth = G;
  };
  F.prototype.getLineThickness = function () {
    return this.m_lineThickness;
  };
  F.prototype.setAlpha = function (G) {
    if (G === undefined) G = 0;
    this.m_alpha = G;
  };
  F.prototype.getAlpha = function () {
    return this.m_alpha;
  };
  F.prototype.setFillAlpha = function (G) {
    if (G === undefined) G = 0;
    this.m_fillAlpha = G;
  };
  F.prototype.getFillAlpha = function () {
    return this.m_fillAlpha;
  };
  F.prototype.setXFormScale = function (G) {
    if (G === undefined) G = 0;
    this.m_xformScale = G;
  };
  F.prototype.getXFormScale = function () {
    return this.m_xformScale;
  };
  F.prototype.drawPolygon = function (G, K, y) {
    if (K) {
      var w = this.m_ctx,
        A = this.m_drawScale;
      w.beginPath();
      w.strokeStyle = this._color(y.color, this.m_alpha);
      w.moveTo(G[0].x * A, G[0].y * A);
      for (y = 1; y < K; y++) w.lineTo(G[y].x * A, G[y].y * A);
      w.lineTo(G[0].x * A, G[0].y * A);
      w.closePath();
      w.stroke();
    }
  };
  F.prototype.drawSolidPolygon = function (G, K, y) {
    if (K) {
      var w = this.m_ctx,
        A = this.m_drawScale;
      w.beginPath();
      w.strokeStyle = this._color(y.color, this.m_alpha);
      w.fillStyle = this._color(y.color, this.m_fillAlpha);
      w.moveTo(G[0].x * A, G[0].y * A);
      for (y = 1; y < K; y++) w.lineTo(G[y].x * A, G[y].y * A);
      w.lineTo(G[0].x * A, G[0].y * A);
      w.closePath();
      w.fill();
      w.stroke();
    }
  };
  F.prototype.drawCircle = function (G, K, y) {
    if (K) {
      var w = this.m_ctx,
        A = this.m_drawScale;
      w.beginPath();
      w.strokeStyle = this._color(y.color, this.m_alpha);
      w.arc(G.x * A, G.y * A, K * A, 0, Math.PI * 2, true);
      w.closePath();
      w.stroke();
    }
  };
  F.prototype.drawSolidCircle = function (G, K, y, w) {
    if (K) {
      var A = this.m_ctx,
        U = this.m_drawScale,
        p = G.x * U,
        B = G.y * U;
      A.moveTo(0, 0);
      A.beginPath();
      A.strokeStyle = this._color(w.color, this.m_alpha);
      A.fillStyle = this._color(w.color, this.m_fillAlpha);
      A.arc(p, B, K * U, 0, Math.PI * 2, true);
      A.moveTo(p, B);
      A.lineTo((G.x + y.x * K) * U, (G.y + y.y * K) * U);
      A.closePath();
      A.fill();
      A.stroke();
    }
  };
  F.prototype.drawSegment = function (G, K, y) {
    var w = this.m_ctx,
      A = this.m_drawScale;
    w.strokeStyle = this._color(y.color, this.m_alpha);
    w.beginPath();
    w.moveTo(G.x * A, G.y * A);
    w.lineTo(K.x * A, K.y * A);
    w.closePath();
    w.stroke();
  };
  F.prototype.drawTransform = function (G) {
    var K = this.m_ctx,
      y = this.m_drawScale;
    K.beginPath();
    K.strokeStyle = this._color(16711680, this.m_alpha);
    K.moveTo(G.position.x * y, G.position.y * y);
    K.lineTo(
      (G.position.x + this.m_xformScale * G.R.col1.x) * y,
      (G.position.y + this.m_xformScale * G.R.col1.y) * y
    );
    K.strokeStyle = this._color(65280, this.m_alpha);
    K.moveTo(G.position.x * y, G.position.y * y);
    K.lineTo(
      (G.position.x + this.m_xformScale * G.R.col2.x) * y,
      (G.position.y + this.m_xformScale * G.R.col2.y) * y
    );
    K.closePath();
    K.stroke();
  };
})();
var i;
for (i = 0; i < Box2D.postDefs.length; ++i) Box2D.postDefs[i]();
delete Box2D.postDefs;

(function (global) {
  typeof exports === "object" && typeof module !== "undefined"
    ? (exports = Box2D)
    : typeof define === "function" && define.amd
    ? define(["exports"], () => Box2D)
    : ((global =
        typeof globalThis !== "undefined" ? globalThis : global || self),
      (global.Box2D = Box2D));
})(this);
