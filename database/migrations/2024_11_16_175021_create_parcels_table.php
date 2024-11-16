<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('parcels', function (Blueprint $table) {
            $table->id();
            $table->string('reference_no', 100);
            $table->string('sender_name');
            $table->text('sender_address');
            $table->string('sender_phone');
            $table->string('sender_email');
            $table->string('recipient_name');
            $table->text('recipient_address');
            $table->string('recipient_phone');
            $table->string('recipient_email');
            $table->text('description');
            $table->string('image', 100);
            $table->integer('type');
            $table->foreignId('from_branch_id');
            $table->foreignId('to_branch_id');
            $table->string('height', 100);
            $table->string('weight', 100);
            $table->string('length', 100);
            $table->bigInteger('price')->unsigned();
            $table->integer('status');
            $table->timestamps();


        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('parcels');
    }
};
