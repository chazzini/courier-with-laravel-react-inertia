<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Branch extends Model
{
    /** @use HasFactory<\Database\Factories\BranchFactory> */
    use HasFactory;

    protected $fillable = [
        'branch_code',
        'street',
        'city',
        'state',
        'country',
        'phone',
        'email',
        'zip_code',
        'address',
        'user_id',
    ];

    public function parcel()
    {
        return $this->hasMany(Parcel::class);
    }
}
