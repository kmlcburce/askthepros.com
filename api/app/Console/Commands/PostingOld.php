<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Jobs\PostingOld as PostingOldJob;
class PostingOld extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'posting_old:run';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        echo '[Posting] Start running ...';
        PostingOldJob::dispatch();
        echo "\n[Posting] Completed";
    }
}
