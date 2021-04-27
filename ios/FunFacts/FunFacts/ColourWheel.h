//
//  colourWheel.h
//  FunFacts
//
//  Created by Rebekah Shaw on 11/04/2018.
//  Copyright © 2018 Treehouse. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

@interface ColourWheel : NSObject

@property (strong, nonatomic) NSArray *colours;

-(UIColor *)randomColour;

@end
