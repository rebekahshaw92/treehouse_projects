//
//  ViewController.h
//  FunFacts
//
//  Created by Rebekah Shaw on 11/04/2018.
//  Copyright (c) 2018 Treehouse. All rights reserved.
//

#import <UIKit/UIKit.h>

@class FactBook;
@class ColourWheel;

@interface ViewController : UIViewController

@property (weak, nonatomic) IBOutlet UILabel *funFactLabel;
@property (strong, nonatomic) FactBook *factBook;
@property (strong, nonatomic) ColourWheel *colourWheel;
@property (weak, nonatomic) IBOutlet UIButton *FunFactButton;

@end

