//
//  FactBook.h
//  FunFacts
//
//  Created by Rebekah Shaw on 11/04/2018.
//  Copyright © 2018 Treehouse. All rights reserved.
//

#import <Foundation/Foundation.h>


@interface FactBook : NSObject

@property (strong, nonatomic) NSArray *facts;

-(NSString *)randomFact;

@end
