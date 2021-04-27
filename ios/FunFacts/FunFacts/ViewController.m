//
//  ViewController.m
//  FunFacts
//
//  Created by Pasan Premaratne on 12/31/14.
//  Copyright (c) 2014 Treehouse. All rights reserved.
//

#import "ViewController.h"
#import "FactBook.h"
#import "ColourWheel.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    self.factBook = [[FactBook alloc] init];
    self.colourWheel = [[ColourWheel alloc] init];
    UIColor *randomColour = [self.colourWheel randomColour];
    self.view.backgroundColor = randomColour;
    self.FunFactButton.tintColor = randomColour;
    self.funFactLabel.text = [self.factBook randomFact];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (IBAction)showFunFact {
    UIColor *randomColour = [self.colourWheel randomColour];
    self.view.backgroundColor = randomColour;
    self.FunFactButton.tintColor = randomColour;
    self.funFactLabel.text = [self.factBook randomFact];
}


@end
