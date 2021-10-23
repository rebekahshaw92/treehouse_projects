<?php

use PHPUnit\Framework\TestCase;
//require_once __DIR__.'/../src/PigLating.php';

class PigLatinTest extends TestCase
{
    /** @test */
    function convertSingleStartingConsonantWordToPigLatin()
    {
        $word = 'test';
        $expectedResult = 'esttay';

        $pigLatin = new PigLatin();
        $result = $pigLatin->convert($word);

        $this->assertEquals(
            $expectedResult,
            $result
        );
    }
    /** @test */
    function covertDigraphWordToPigLatin()
    {
        $word = 'treehouse';
        $expectedResult = 'eehousetray';

        $pigLatin = new PigLatin();
        $result = $pigLatin->convert($word);

        $this->assertEquals(
            $expectedResult,
            $result,
            "PigLatin conversion did not work correctly"
        );
    }
    /** @test */
    function covertTrigraphWordToPigLatin()
    {
        $word = 'streak';
        $expectedResult = 'eakstray';

        $pigLatin = new PigLatin();
        $result = $pigLatin->convert($word);

        $this->assertEquals(
            $expectedResult,
            $result,
            "PigLatin conversion did not work correctly"
        );
    }
    /** @test */
    function covertStartingVowelWordToPigLatin()
    {
        $word = 'user';
        $expectedResult = 'useray';

        $pigLatin = new PigLatin();
        $result = $pigLatin->convert($word);

        $this->assertEquals(
            $expectedResult,
            $result,
            "PigLatin conversion did not work correctly"
        );
    }
}

?>