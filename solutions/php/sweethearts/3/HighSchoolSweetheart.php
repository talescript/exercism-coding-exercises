<?php

class HighSchoolSweetheart
{
    public function firstLetter(string $name): string
    {
        return substr(trim($name), 0, 1);
    }

    public function initial(string $name): string
    {
        
        //   return $this->expectedCookTime() - $elapsed_minutes;
        return strtoupper($this->firstLetter($name)) . ".";
    }

    public function initials(string $name): string
    {
        
        // $pizza  = "piece1 piece2 piece3 piece4 piece5 piece6";
        // $pieces = explode(" ", $pizza);
        // echo $pieces[0], PHP_EOL; // piece1
        // echo $pieces[1], PHP_EOL; // piece2
        
        $fullName = explode(" ", $name);
        return $this->initial($fullName[0]) . " " . $this->initial($fullName[1]);
    }

    public function pair(string $sweetheart_a, string $sweetheart_b): string
    {
        
        $sweethearts = $this->initials($sweetheart_a) . "  +  " . $this->initials($sweetheart_b);
        
        return 
            <<<HEART
     ******       ******
   **      **   **      **
 **         ** **         **
**            *            **
**                         **
**     $sweethearts     **
 **                       **
   **                   **
     **               **
       **           **
         **       **
           **   **
             ***
              *
HEART;
        
    }
}