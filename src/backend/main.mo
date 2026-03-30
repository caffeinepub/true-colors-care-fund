actor {
  stable var visitCount : Nat = 0;

  // Increment the visitor count
  public shared func recordVisit() : async () {
    visitCount += 1;
  };

  // Retrieve the current visit count
  public query func getVisitCount() : async Nat {
    visitCount;
  };
};
