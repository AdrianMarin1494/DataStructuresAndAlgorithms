let quote = function(fighter) {
    // Solution 1
    //   if (fighter.toLowerCase() === 'conor mcgregor') {
    //     return "I'd like to take this chance to apologize.. To absolutely NOBODY!";
    //   } else if (fighter.toLowerCase() === 'george saint pierre') {
    //     return "I am not impressed by your performance."; 
    //   } else {
    //     return 'Invalid name.';
    //   }
      
    //   Solution 2
      return fighter.toLowerCase() === 'conor mcgregor' ? 
        "I'd like to take this chance to apologize.. To absolutely NOBODY!" :
        fighter.toLowerCase() === 'george saint pierre' ?
        "I am not impressed by your performance." : 'Invalid name';
    };